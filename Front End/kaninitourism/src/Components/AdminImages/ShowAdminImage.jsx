import React, { useState, useEffect } from 'react'
import GalleryImages from './AdminImage';
import axios from 'axios';
import Adminpage from '../Adminpage/Adminpage';
import AdminImage from './AdminImage';
import './AdminImages.css'

function ShowAdminImage() {
    const [galleryList, setgalleryList] = useState([])
    const [recordForEdit, setRecordForEdit] = useState(null)

    useEffect(() => {
        refreshgalleryList();
    }, [])

    const crudgalleryapi = (url = 'https://localhost:7050/api/Images/') => {
        return {
            fetchAll: () => axios.get(url),
            create: newRecord => axios.post(url, newRecord),
            update: (id, updatedRecord) => axios.put(url + id, updatedRecord),
            delete: id => axios.delete(url + id)
        }
    }

    function refreshgalleryList() {
        crudgalleryapi().fetchAll()
            .then(res => {
                setgalleryList(res.data)
            })
            .catch(err => console.log(err))
    }

    const addOrEdit = (formData, onSuccess) => {
        if (formData.get('adminImgsId') == "0")
            crudgalleryapi().create(formData)
                .then(res => {
                    onSuccess();
                    refreshgalleryList();
                })
                .catch(err => console.log(err))
        else
            crudgalleryapi().update(formData.get('adminImgsId'), formData)
                .then(res => {
                    onSuccess();
                    refreshgalleryList();
                })
                .catch(err => console.log(err))

    }

    const showRecordDetails = data => {
        setRecordForEdit(data)
    }

    const onDelete = (e, id) => {
        e.stopPropagation();
        if (window.confirm('Are you sure to delete this record?'))
            crudgalleryapi().delete(id)
                .then(res => refreshgalleryList())
                .catch(err => console.log(err))
    }

    const imageCard = data => (
        <div className="card" onClick={() => { showRecordDetails(data) }}>
            <img src={data.imageSrc} className="card-img-top rounded-circle" />
            <div className="card-body">
                <h5>{data.location}</h5>
                <span>{data.description}</span> <br />
                <button className="btn btn-light delete-button" onClick={e => onDelete(e, parseInt(data.adminImgsId))}>
                    <i className="far fa-trash-alt"></i>
                </button>
            </div>
        </div>
    )


    return (
        <div className="row">
            <div className="col-md-12">
                <div className="jumbotron jumbotron-fluid py-4">
                    <div className="container text-center">
                        <h1 className="display-4">Add/Edit - Location Details</h1>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <AdminImage
                    addOrEdit={addOrEdit}
                    recordForEdit={recordForEdit}
                />
            </div>
            <div className="col-md-8">
                <table>
                    <tbody>
                        {
                            //tr > 3 td
                            [...Array(Math.ceil(galleryList.length / 3))].map((e, i) =>
                                <tr key={i}>
                                    <td>{imageCard(galleryList[3 * i])}</td>
                                    <td>{galleryList[3 * i + 1] ? imageCard(galleryList[3 * i + 1]) : null}</td>
                                    <td>{galleryList[3 * i + 2] ? imageCard(galleryList[3 * i + 2]) : null}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ShowAdminImage