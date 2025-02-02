import dotenv from 'dotenv';
dotenv.config();

const conf = {
    appwriteUrl: String(process.env.APPWRITE_URL),
    appwriteProjectId: String(process.env.APPWRITE_PROJECT_ID),
    appwriteDatabaseId: String(process.env.APPWRITE_DATABASE_ID),
    appwriteCollectionId: String(process.env.APPWRITE_PROBLEMS_COLLECTION_ID)
}

export default conf;