// ShowHotel.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Hotel from './Hotel'; // Make sure to import the correct path for your Hotel component

function ShowHotel() {
    const [galleryList, setGalleryList] = useState([]);
    const [recordForEdit, setRecordForEdit] = useState(null);

    useEffect(() => {
        refreshGalleryList();
    }, []);

    const crudGalleryApi = (url = 'https://localhost:7050/api/Hotel/') => {
        return {
            fetchAll: () => axios.get(url),
            create: (newRecord) => axios.post(url, newRecord),
            update: (id, updatedRecord) => axios.put(url + id, updatedRecord),
            delete: (id) => axios.delete(url + id),
        };
    };

    function refreshGalleryList() {
        crudGalleryApi()
            .fetchAll()
            .then((res) => {
                setGalleryList(res.data);
            })
            .catch((err) => console.log(err));
    }

    const addOrEdit = (formData, onSuccess) => {
        if (formData.get('hotelId') === '0') {
            crudGalleryApi()
                .create(formData)
                .then((res) => {
                    onSuccess();
                    refreshGalleryList();
                })
                .catch((err) => console.log(err));
        } else {
            crudGalleryApi()
                .update(formData.get('hotelId'), formData)
                .then((res) => {
                    onSuccess();
                    refreshGalleryList();
                })
                .catch((err) => console.log(err));
        }
    };

    const showRecordDetails = (data) => {
        setRecordForEdit(data);
    };

    const onDelete = (e, id) => {
        e.stopPropagation();
        if (window.confirm('Are you sure to delete this record?')) {
            crudGalleryApi()
                .delete(id)
                .then((res) => refreshGalleryList())
                .catch((err) => console.log(err));
        }
    };

    const imageCard = (data) => (
        <div className="card" onClick={() => showRecordDetails(data)}>
            <img src={data.imageSrc} className="card-img-top rounded-circle" alt="Hotel" />
            <div className="card-body">
                <h5>{data.hotelName}</h5>
                <span>{data.hotelDescription}</span> <br />
                <button className="btn btn-light delete-button" onClick={(e) => onDelete(e, parseInt(data.hotelId))}>
                    <i className="far fa-trash-alt"></i>
                </button>
            </div>
        </div>
    );

    return (
        <div className="row">
            <div className="col-md-12">
                <div className="jumbotron jumbotron-fluid py-4">
                    <div className="container text-center">
                        <h1 className="display-4">Add/Edit - Hotel Details</h1>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <Hotel addOrEdit={addOrEdit} recordForEdit={recordForEdit} />
            </div>
            <div className="col-md-8">
                <table>
                    <tbody>
                        {[...Array(Math.ceil(galleryList.length / 3))].map((_, i) => (
                            <tr key={i}>
                                <td>{imageCard(galleryList[3 * i])}</td>
                                <td>{galleryList[3 * i + 1] ? imageCard(galleryList[3 * i + 1]) : null}</td>
                                <td>{galleryList[3 * i + 2] ? imageCard(galleryList[3 * i + 2]) : null}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ShowHotel;
