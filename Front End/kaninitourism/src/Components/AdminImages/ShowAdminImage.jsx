import React, { useState, useEffect } from 'react'
import GalleryImages from './AdminImage';
import axios from 'axios';
import Adminpage from '../Adminpage/Adminpage';
import AdminImage from './AdminImage';
import './AdminImages.css'
import Navbar from '../Navbar/Navbar';
import { Link } from 'react-router-dom';
import Logo from '../../Assets/traveltour.png'

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
        <div className="card getimg" onClick={() => showRecordDetails(data)}>
          <img src={data.imageSrc} alt="default images" />
          <div className="card-body">
            <h5>{data.locationName}</h5>
            <span className="locationdesc">{data.locationDescription}</span> <br />
            <button
              className="btn btn-danger"
              onClick={e => onDelete(e, parseInt(data.adminImgsId))}
            >
              <i className="far fa-trash-alt" style={{color:'white'}}></i>
            </button>
          </div>
        </div>
      );
      const [showLink, setShowLink] = useState(false);
      const [agent, setAgent] = useState([]);
  
      const toggleLinks = () => {
          setShowLink(!showLink);
      };

      const Logout=()=>{
        sessionStorage.removeItem('role')
        sessionStorage.removeItem('accessToken')
        sessionStorage.removeItem('refreshToken')
        sessionStorage.removeItem('Id')
      }


    return (
        <>
         <nav className="navbar">
                <div className="navbar-logo">
                    <img className='image-logo' src={Logo} style={{height:'100px',width:'120px'}} alt="Logo" />
                </div>
                <div className={`navbar-toggle ${showLink ? 'active' : ''}`} onClick={toggleLinks}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <ul className={`navbar-links ${showLink ? 'active' : ''}`}>
                 <Link style={{textDecoration:'none',color:'black'}} to={'/'}><li>Home</li></Link>
                <Link style={{textDecoration:'none',color:'black'}} to={'/'}><li onClick={Logout}>Logout</li></Link>
                </ul>
            </nav>
        <div className="row">
            <div className="col-md-12">
                <div className="jumbotron jumbotron-fluid py-4">
                    <div className="container text-center">
                        <h3>Add/Edit Place Details</h3>
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
                        {galleryList.map((data, i) => (
                            <tr key={i}>
                                <td>{imageCard(data)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
        </>
    )
}

export default ShowAdminImage