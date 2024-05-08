import { Request, Response } from 'express';
import {ticketDao} from '../dao/ticketDao';
import { CustomLogger } from '../config/Logger';
import * as jwt from 'jsonwebtoken';

















let ticket = new ticketDao();

export class ticketService {
    
    constructor() { }
    
    public  Delete(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into ticketService.ts: Delete')
     let  ticketId = req.params.id;
     ticket.Delete(ticketId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from ticketService.ts: Delete')
             
             
            callback(response);

         });
    }
    
public  Search(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into ticketService.ts: Search')
     let  ticketData = req.query;
     ticket.Search(ticketData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from ticketService.ts: Search')
             
             
            callback(response);

         });
    }
    
public  SearchForUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into ticketService.ts: SearchForUpdate')
     let  ticketData = req.body;
     ticket.SearchForUpdate(ticketData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from ticketService.ts: SearchForUpdate')
             
             
            callback(response);

         });
    }
    
public  Update(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into ticketService.ts: Update')
     let  ticketData = req.body;
     ticket.Update(ticketData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from ticketService.ts: Update')
             
             
            callback(response);

         });
    }
    
public  GetEntityById(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into ticketService.ts: GetEntityById')
     let  ticketId = req.params.id;
     ticket.GetEntityById(ticketId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from ticketService.ts: GetEntityById')
             
             
            callback(response);

         });
    }
    
public  GetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into ticketService.ts: GetAllValues')
     
     ticket.GetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from ticketService.ts: GetAllValues')
             
             
            callback(response);

         });
    }
    
public  Create(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into ticketService.ts: Create')
     let  ticketData = req.body;
     ticket.Create(ticketData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from ticketService.ts: Create')
             
             
            callback(response);

         });
    }
    
public  GetNounCreatedBy(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into ticketService.ts: GetNounCreatedBy')
     let  ticketData = { created_by: req.query.createdby };
     ticket.GetNounCreatedBy(ticketData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from ticketService.ts: GetNounCreatedBy')
             
             
            callback(response);

         });
    }
    
    
    
    
}