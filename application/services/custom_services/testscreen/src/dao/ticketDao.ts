import * as mongoose from 'mongoose';
import ticketModel from '../models/daomodels/ticket';
import * as generate from 'nanoid/generate';
import * as dictionary from 'nanoid-dictionary';
import { CustomLogger } from '../config/Logger'




export class ticketDao {
    private ticket = ticketModel;

    

    constructor() { }
    
    public async Delete(ticketId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into ticketDao.ts: Delete');

    

    
    
    
    this.ticket.findByIdAndRemove(ticketId).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from ticketDao.ts: Delete');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}
public async Search(ticketData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into ticketDao.ts: Search');

    let andkey ;let and_obj = {} ;let orkey ;let or_obj = {} ;;

    
    
    Object.entries(ticketData).forEach(
                            ([key,value]) => {
                                if(value !== ''){
                                    andkey = key;
                                    and_obj[andkey] = value;
                                }
                                else{
                                    orkey = key;
                                    or_obj[orkey] = { $ne: '' }
                                }
                            }
                        );;
    this.ticket.find({$and: [
                            {
                                $or: [
                                   or_obj
                                ]
                            },
                            and_obj
                        ]}).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from ticketDao.ts: Search');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}
public async SearchForUpdate(ticketData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into ticketDao.ts: SearchForUpdate');

    

    
    
    
    this.ticket.findOneAndUpdate({ _id: ticketData._id }, ticketData, { new: true }).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from ticketDao.ts: SearchForUpdate');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}
public async Update(ticketData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into ticketDao.ts: Update');

    

    
    
    
    this.ticket.findOneAndUpdate({ _id: ticketData._id }, ticketData, { new: true }).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from ticketDao.ts: Update');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GetEntityById(ticketId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into ticketDao.ts: GetEntityById');

    

    
    
    
    this.ticket.findById(ticketId).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from ticketDao.ts: GetEntityById');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GetAllValues(callback){
    
    new CustomLogger().showLogger('info', 'Enter into ticketDao.ts: GetAllValues');

    

    
    
    
    this.ticket.find().then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from ticketDao.ts: GetAllValues');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}
public async Create(ticketData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into ticketDao.ts: Create');

    let temp = new ticketModel(ticketData);

    
    
    
    temp.save().then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from ticketDao.ts: Create');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GetNounCreatedBy(ticketData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into ticketDao.ts: GetNounCreatedBy');

    

    
    
    
    this.ticket.aggregate(([
                        { $match: { $and: [{ created_by: ticketData.created_by }] } }
                    ])).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from ticketDao.ts: GetNounCreatedBy');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}


}