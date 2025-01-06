import { db } from "./firebase"; // Your Firebase initialization file
import {
  collection,
  doc,
  addDoc,
  getDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  query,
  where,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";

// Firestore Schema Names
export const COLLECTIONS = {
  BLOGS: "blogs",
  USERS: "users",
  ORDERS: "orders",
  PRODUCTS: "products",
  LeaderShip: "LeaderShip"
  // Add other schema names here
};

// Local Storage Keys
const LOCAL_STORAGE_USER_KEY = "authUser";

/**
 * Create a new document in a specified collection.
 * @param {string} collectionName - The name of the Firestore collection.
 * @param {Object} data - The data to save in the new document.
 * @returns {Promise<string>} - The ID of the newly created document.
 */
export const createDocument = async (collectionName, data) => {
  try {
    const docRef = await addDoc(collection(db, collectionName), data);
    console.log("Document written with ID: ", docRef.id);
    return docRef.id;
  } catch (error) {
    console.error("Error adding document: ", error);
    throw error;
  }
};

/**
 * Read all documents from a specified collection.
 * @param {string} collectionName - The name of the Firestore collection.
 * @returns {Promise<Object[]>} - Array of documents from the collection.
 */
export const readAllDocuments = async (collectionName) => {
  try {
    const querySnapshot = await getDocs(collection(db, collectionName));
    return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error("Error fetching documents: ", error);
    throw error;
  }
};

/**
 * Read a single document by its ID.
 * @param {string} collectionName - The name of the Firestore collection.
 * @param {string} docId - The ID of the document to fetch.
 * @returns {Promise<Object>} - The fetched document data.
 */
export const readDocument = async (collectionName, docId) => {
  try {
    const docRef = doc(db, collectionName, docId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return { id: docId, ...docSnap.data() };
    } else {
      console.error("No such document!");
      return null;
    }
  } catch (error) {
    console.error("Error fetching document: ", error);
    throw error;
  }
};

/**
 * Update a document by its ID.
 * @param {string} collectionName - The name of the Firestore collection.
 * @param {string} docId - The ID of the document to update.
 * @param {Object} data - The data to update in the document.
 * @returns {Promise<void>}
 */
export const updateDocument = async (collectionName, docId, data) => {
  try {
    const docRef = doc(db, collectionName, docId);
    await updateDoc(docRef, data);
    console.log("Document updated with ID: ", docId);
  } catch (error) {
    console.error("Error updating document: ", error);
    throw error;
  }
};

/**
 * Delete a document by its ID.
 * @param {string} collectionName - The name of the Firestore collection.
 * @param {string} docId - The ID of the document to delete.
 * @returns {Promise<void>}
 */
export const deleteDocument = async (collectionName, docId) => {
  try {
    const docRef = doc(db, collectionName, docId);
    await deleteDoc(docRef);
    console.log("Document deleted with ID: ", docId);
  } catch (error) {
    console.error("Error deleting document: ", error);
    throw error;
  }
};

/**
 * Authenticate user based on username and password.
 * @param {string} username - Username of the user.
 * @param {string} password - Password of the user.
 * @returns {Promise<boolean>} - Returns `true` if credentials match, `false` otherwise.
 */
export const authenticateUser = async (username, password) => {
  try {
    const usersRef = collection(db, COLLECTIONS.USERS);
    const q = query(
      usersRef,
      where("username", "==", username),
      where("password", "==", password)
    );
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      // Store user session in local storage
      const user = querySnapshot.docs[0].data();
      localStorage.setItem(
        LOCAL_STORAGE_USER_KEY,
        JSON.stringify({ username: user.username, id: querySnapshot.docs[0].id })
      );
      return true;
    }

    return false;
  } catch (error) {
    console.error("Error during authentication:", error);
    throw error;
  }
};

/**
 * Check if a user is authenticated.
 * @returns {Object|null} - Returns user data if authenticated, null otherwise.
 */
export const checkUserSession = () => {
  const userData = localStorage.getItem(LOCAL_STORAGE_USER_KEY);
  return userData ? JSON.parse(userData) : null;
};

/**
 * Logout the authenticated user.
 * Clears the user session from local storage.
 * @returns {void}
 */
export const logoutUser = () => {
  localStorage.removeItem(LOCAL_STORAGE_USER_KEY);
  console.log("User logged out successfully.");
};



export const startSession = async (userId, page) => {
  try {
    const sessionRef = doc(db, "active_users", userId);
    await setDoc(sessionRef, {
      user_id: userId,
      page: page,
      timestamp: serverTimestamp(),
    });
  } catch (error) {
    console.error("Error starting session:", error);
  }
};

export const endSession = async (userId) => {
  try {
    const sessionRef = doc(db, "active_users", userId);
    await deleteDoc(sessionRef);
  } catch (error) {
    console.error("Error ending session:", error);
  }
};


export const incrementPageVisit = async (page) => {
  try {
    const q = query(collection(db, "page_visits"), where("page", "==", page));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      const docId = querySnapshot.docs[0].id;
      const docRef = doc(db, "page_visits", docId);
      await updateDoc(docRef, { visitCount: increment(1) });
    } else {
      await addDoc(collection(db, "page_visits"), { page, visitCount: 1 });
    }
  } catch (error) {
    console.error("Error incrementing page visit count:", error);
  }
};

// Fetch all page visit stats
export const fetchPageVisits = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "page_visits"));
    return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error("Error fetching page visits:", error);
  }
};

// Fetch blogs
export const fetchBlogs = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "blogs"));
    return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error("Error fetching blogs:", error);
  }
};

// Increment blog visit count
export const incrementBlogVisit = async (blogId) => {
  try {
    const q = query(collection(db, "blog_visits"), where("blogId", "==", blogId));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      const docId = querySnapshot.docs[0].id;
      const docRef = doc(db, "blog_visits", docId);
      await updateDoc(docRef, { visitCount: increment(1) });
    } else {
      await addDoc(collection(db, "blog_visits"), { blogId, visitCount: 1 });
    }
  } catch (error) {
    console.error("Error incrementing blog visit count:", error);
  }
};

// Fetch blog visit stats
export const fetchBlogVisits = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "blog_visits"));
    return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error("Error fetching blog visits:", error);
  }
};

// Fetch active users
export const fetchActiveUsers = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "active_users"));
    return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error("Error fetching active users:", error);
  }
};