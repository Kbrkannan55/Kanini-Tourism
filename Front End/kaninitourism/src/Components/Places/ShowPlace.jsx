import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Place from './Place';

function ShowPlace() {
  const [galleryList, setgalleryList] = useState([]);
  const [recordForEdit, setRecordForEdit] = useState(null);

  useEffect(() => {
    refreshgalleryList();
  },[ ]);

  const crudgalleryapi = (url = 'https://localhost:7050/api/Place/') => {
    return {
      fetchAll: () => axios.get(url),
      create: newRecord => axios.post(url, newRecord),
      update: (id, updatedRecord) => axios.put(url + id, updatedRecord),
      delete: id => axios.delete(url + id)
    };
  };

  function refreshgalleryList() {
    crudgalleryapi()
      .fetchAll()
      .then(res => {
        setgalleryList(res.data);
      })
      .catch(err => console.log(err));
  }

  const addOrEdit = (formData, onSuccess) => {
    const id = parseInt(formData.get('id'));
  
    if (id === 0) {
      crudgalleryapi()
        .create(formData)
        .then(res => {
          console.log('Create Response:', res.data); // Log the response for debugging
          onSuccess();
          refreshgalleryList();
        })
        .catch(err => {
          console.error('Create Error:', err); // Log the error for debugging
        });
    } else {
      crudgalleryapi()
        .update(id, formData)
        .then(res => {
          console.log('Update Response:', res.data); // Log the response for debugging
          onSuccess();
          refreshgalleryList();
        })
        .catch(err => {
          console.error('Update Error:', err); // Log the error for debugging
        });
    }
  };
  

  const showRecordDetails = data => {
    setRecordForEdit(data);
  };

  const onDelete = (e, id) => {
    e.stopPropagation();
    if (window.confirm('Confirm your Delete')) {
      crudgalleryapi()
        .delete(id)
        .then(res => refreshgalleryList())
        .catch(err => console.log(err));
    }
  };

  const imageCard = data => (
    <div className="card getimg" onClick={() => showRecordDetails(data)}>
      <img src={data.imageSrc} className="card-img-top" alt="default images" />
      <div className="card-body">
        <h5>{data.location}</h5>
        <span className="locationdesc">{data.description}</span> <br />
        <button
          className="btn btn-danger"
          onClick={e => onDelete(e, parseInt(data.id))}
        >
          <i className="far fa-trash-alt" style={{color:'white'}}></i>
        </button>
      </div>
    </div>
  );

  return (
    <div className="row">
      <div className="col-md-4">
        <Place addOrEdit={addOrEdit} recordForEdit={recordForEdit} />
      </div>
      <div className="col">
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
  );
}

export default ShowPlace;