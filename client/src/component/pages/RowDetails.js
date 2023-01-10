import React from 'react'

function RowDetails() {
    return (
        
            <tr>
                <th>waeltouati@gmail.com</th>
                <td>touati</td>
                <td>wael</td>
                <td>30</td>
                <td className="gap__actions">

                    <span className="badge bg-info"><a href="/id" className="text-white"><i className="fas fa-edit"></i></a></span>

                    <span className="badge bg-danger" onClick=""><i
                        className="fas fa-trash-alt"
                    ></i></span>
                </td>
            </tr>
      
    )
}

export default RowDetails