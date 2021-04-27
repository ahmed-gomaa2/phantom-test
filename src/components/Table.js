import React from 'react';
import '../styling/table.scss';

const Table = ({products}) => {
    return (
        <table class="table">
            <thead>
                <tr>
                    <th>DATE </th>
                    <th>PRODUCT</th>
                    <th>SIZE US</th>
                    <th>WEBSITE</th>
                    <th>PRICE</th>
                    <th>STATUS</th>
                </tr>
            </thead>
            <tbody>
                {products.map(product => (
                    <tr>
                        {Object.keys(product).map((p, index) => (
                            <td>{product[p]}</td>
                        ))}
                    </tr>
                ))}

            </tbody>
        </table>
    )
}

export default Table;