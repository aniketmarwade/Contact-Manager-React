import React from 'react';
import { IconButton, Avatar } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from '@material-ui/icons/Edit';

<DeleteIcon />
function ContactCard() {
    return (
        <div>
            <div className="card mt-2">
                <div className="card-body d-flex justify-content-between">
                    <div className="cont-info d-flex">
                        <Avatar style={{background:"cyan", color:"black"}}>AM</Avatar>
                       <div className="container">
                       <h4>Aniket Marwade</h4>
                        <p>aniket@gmail.com</p>
                       </div>
                    </div>
                    <div className="iconsc">
                        <IconButton>
                            <DeleteIcon style={{ fontSize: 25, color:"red"}} />
                        </IconButton>

                        <IconButton>
                            <EditIcon style={{ fontSize: 25, color:"green"}} />
                        </IconButton>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactCard
