import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";

export class AuthService {
    client = new Client();
    account;

    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client)


    }
    
    async createAcount({email,password,name}){
        try{
            const userAccount = await this.account.create(ID.unique(),email,password,name);
            if(userAccount) {
                return this.login({email,password});
            }// call anouther method;
            else 
            return userAccount;
        }
        catch(error){
            throw error;
        }
    }

    async login({email,password}) {
        try{
            return await this.account.createEmailSession(email,password);
        }
        catch(error){
            throw error;
        } 
    }

    async getCurrentUser(){
        try{
            await this.account.get();
        }catch(error){
            console.log("Appwrite service :: getCurrentUser :: error",error);
        }

        return null;
    }

    async logout(){
        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite service :: getCurrentUser :: error",error);
            
        }
    }

    // jab object banega to constructor automatically call hota hai 
    
}

const authService = new AuthService();

export default authService;             // exporting object  .. we will use constructor also