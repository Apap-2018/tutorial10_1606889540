import React from 'react';
import {Link} from "react-router-dom";

export const DaftarStafFarmasiRow = (props) => {
    return (
        <tbody>
            {props.listStaf.map(staf => {
                return (
                    <tr key={staf.id}>
                        <td>{staf.nama}</td>
                        <td>{staf.jenis}</td>

                            { /*<Link to={`/update-staf-farmasi/${staf.id}`} className="btn btn-info">Update</Link>*/}

                    </tr>
                )
            })}
        </tbody>
    )
}