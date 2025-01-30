import conf from '../conf.js';
import { Client, ID, Databases, Storage, Query} from 'appwrite';

export class Service{
    client = new Client();
    databases;
    bucket;
    constructor(){
        this.client
            .setEndpoint(conf.appWriteUrl)
            .setProject(conf.appWriteProjectId);
            this.databases = new Databases(this.client);
            this.bucket = new Storage(this.client);

    }

    async createPost({title, slug, content, featuredImage, status, userId}){
        try{

            return await this.databases.createDocument(
                conf.appWriteDatabaseId,
                conf.appWriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId,


                }
            )

        }catch (error){
            console.log("Appwrite serive :: getCurrentUser :: error", error);
        }
    }

    async updatePost(slug, {title, content, featuredImage, status}){
        try{
            return await this.databases.updateDocument(
                conf.appWriteDatabaseId,
                conf.appWriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status, 
                }

            )

        } catch (error) {
            console.log("Appwrite serive :: updatePost :: error", error ); 
        }

    }

    async deletePost() {}
} 




const service = new Service()
export default  service 