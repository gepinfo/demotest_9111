import { Request, Response, NextFunction } from "express";
import { ticketController } from '../controller/ticketController';


export class Routes {
    private ticket: ticketController = new ticketController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/ticket/:id').delete(this.ticket.Delete);
app.route('/ticket/get/search').get(this.ticket.Search);
app.route('/ticket/get/update').put(this.ticket.SearchForUpdate);
app.route('/ticket').put(this.ticket.Update);
app.route('/ticket/:id').get(this.ticket.GetEntityById);
app.route('/ticket').get(this.ticket.GetAllValues);
app.route('/ticket').post(this.ticket.Create);
app.route('/ticket/userid/created_by').get(this.ticket.GetNounCreatedBy);
     }

}