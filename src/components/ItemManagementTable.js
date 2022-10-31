import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link,useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ItemManagementTable() {
  const { itemid } = useParams();
  const { categoryid } = useParams();
  const [item, setitem] = useState({Title:""})
  const [title, setTitle] = useState("")
  const [Description, setDescription] = useState("")
  const [Price, setPrice] = useState("")
  const [discountableitem, setdiscountableitem] = useState(false)
  const [available, setavailable] = useState(true)
  const [variant, setvariant] = useState(false)
  const [sunday, setsunday] = useState(true)
  const [monday, setmonday] = useState(true)
  const [tuesday, settuesday] = useState(true)
  const [wednesday, setwednesday] = useState(true)
  const [thursday, setthursday] = useState(true)
  const [friday, setfriday] = useState(true)
  const [saturday, setsaturday] = useState(true)
  const [file,setFile] = useState("");

  async function handleUpdate() {
    // const detail ={
    //   title,
    //   Description,
    //   Price,
    //   discountableitem,
    //   available,
    //   variant,
    //   sunday,
    //   monday,
    //   tuesday,
    //   wednesday,
    //   thursday,
    //   friday,
    //   saturday,
    //   file
    // }

    var formData = new FormData();
    formData.append("photo",file)
    formData.append("title",title);
    formData.append("Description",Description);
    formData.append("Price",Price);
    formData.append("available",available)
    formData.append("discountableitem",discountableitem)
    formData.append("variant",variant)
    formData.append("sunday",sunday)
    formData.append("monday",monday)
    formData.append("tuesday",tuesday)
    formData.append("wednesday",wednesday)
    formData.append("friday",friday)
    formData.append("saturday",saturday)

    const config = {
      headers:{
          "Content-Type":"multipart/form-data"
      }
  }

    try {
      const result = await axios.post(
        `http://localhost:5000/api/admin/updateitemmanagement/${itemid}/${categoryid}`,
               formData, config

      ).data;
      console.log(result);
      toast.success("Item has been updated")
      setInterval(() => {
        window.location.href="/menu"
      }, 2000);

    } catch (error) {
      console.log(error);
      toast.warn("Something went wrong try again!")
    }
    
  }

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await (
          await axios.get(`http://localhost:5000/api/admin/getitemmanagement/${itemid}/${categoryid}`)
        ).data;
        setitem(data.data);
        setdiscountableitem(data.data[0]['discountableitem'] === 'true' ? (true):(false));
        setavailable(data.data[0]['available'] === 'true' ? (true):(false));
        setvariant(data.data[0]['variant'] === 'true' ? (true):(false));
        setsunday(data.data[0]['sunday'] === 'true' ? (true):(false));
        setmonday(data.data[0]['monday'] === 'true' ? (true):(false));
        settuesday(data.data[0]['tuesday'] === 'true' ? (true):(false));
        setwednesday(data.data[0]['wednesday'] === 'true' ? (true):(false));
        setthursday(data.data[0]['thursday'] === 'true' ? (true):(false));
        setfriday(data.data[0]['friday'] === 'true' ? (true):(false));
        setsaturday(data.data[0]['saturday'] === 'true' ? (true):(false));
        setFile(data.data[0]['Image'] === 'true' ? (true):(false));
        console.log(item);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [])
  

  return (
    <>
        <ToastContainer />
      <div className="row sharebox">
        <h3 className="my-3 mx-5 responsiveness">ITEM MANAGEMENT</h3>
        <div className="col-lg-12 bs br mx-5 my-5 py-5 px-5 responsiveness">
          <div className="d-flex justify-content-between mobile-responsive">
            <h6>ITEM MANAGEMENT</h6>

            <Link to="/menu">
              <button className="btn btn-info">
                <i className="fa-solid fa-backward btnicon"></i>BACK TO ITEMS
              </button>
            </Link>
          </div>
          <br />
          <hr />
          <br />
          <div className="row">
            <div className="col-md-12">
              <label htmlFor="itemname">Item Name</label>
              <input
                id="itemname"
                name="title"
                type="text"
                className="form-control mt-2 mb-5 py-3"
                // placeholder={`${item.Title}`}
                value={item.Title}
                onChange={(e) => { setitem(e.target.value); setTitle(e.target.value) }}
              />
              <label htmlFor="description">Item Description</label>
              <textarea
                id="description"
                className="form-control mt-2 mb-5"
                placeholder="Item Description..."
                rows="5"
                name="Description"
                value={item.Description}
                onChange={(e) => { setitem(e.target.value); setDescription(e.target.value) }}
              />
              <label htmlFor="price">Item Price</label>
              <input
                id="price"
                className="form-control mt-2 mb-5 py-3"
                name="Price"
                placeholder="Item Price..."
                value={item.Price}
                onChange={(e) => { setitem(e.target.value); setPrice(e.target.value) }}
              />
              <label htmlFor="vat">
                VAT Percentage (calculated into item price)
              </label>
              <input
                id="vat"
                className="form-control mt-2 mb-5 py-3"
                placeholder="Item VAT Percentage..."
                value={item.vat}
              />
              <div className="form-check form-switch my-5">
                <div className="row justify-content-between my-3">
                  <label
                    className="form-check-label"
                    htmlFor="flexSwitchCheckDefault"
                  >
                    Discountable
                  </label>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="flexSwitchCheckDefault"
                    name="discountableitem"
                    value={discountableitem}
                    onChange={(e)=>{setdiscountableitem(e.target.checked)}}
                  />
                </div>
                <div className="row justify-content-between my-3">
                  <label
                    className="form-check-label"
                    htmlFor="flexSwitchCheckDefault"
                  >
                    Item Available
                  </label>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="flexSwitchCheckDefault"
                    name="available"
                    checked={available}
                    onChange={(e)=>{setavailable(e.target.checked)}}
                  />
                </div>
                <div className="row justify-content-between my-3">
                  <label
                    className="form-check-label"
                    htmlFor="flexSwitchCheckDefault"
                  >
                    Enable Variant
                  </label>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="flexSwitchCheckDefault"
                    value={variant}
                    name="variant"
                    onChange={(e)=>{setvariant(e.target.checked)}}
                  />
                </div>
              </div>
              <div className="input-group my-3">
                <input type="file" 
                className="form-control" 
                id="photo"
                name="photo"
                onChange={(e)=>{setFile(e.target.files[0])}}
                 />
              </div>
              <div className="text-center my-4">
                <img className="managementimg" src={file} alt="..." />
              </div>
              <h4 className="mt-5 mb-2 boldtext">Available Days</h4>
              <div className="w-25">
                <div className="form-check form-switch my-3">
                  <div className="row justify-content-between">
                    <label className="form-check-label" htmlFor="sunday">
                      Sunday
                    </label>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="sunday"
                      name="sunday"
                      checked={sunday}
                      onChange={(e)=>{setsunday(e.target.checked)}}
                    />
                  </div>
                </div>
                <div className="form-check form-switch my-3">
                  <div className="row justify-content-between">
                    <label className="form-check-label" htmlFor="monday">
                      Monday
                    </label>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="monday"
                      name="monday"
                      checked={monday}
                      onChange={(e)=>{
                        setmonday(e.target.checked)
                      }}
                    />
                  </div>
                </div>
                <div className="form-check form-switch my-3">
                  <div className="row justify-content-between">
                    <label className="form-check-label" htmlFor="tuesday">
                      Tuesday
                    </label>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="tuesday"
                      name="tuesday"
                      checked={tuesday}
                      onChange={(e)=>{settuesday(e.target.checked)}}
                    />
                  </div>
                </div>
                <div className="form-check form-switch my-3">
                  <div className="row justify-content-between">
                    <label className="form-check-label" htmlFor="wednesday">
                      Wednesday
                    </label>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="wednesday"
                      name="wednesday"
                      checked={wednesday}
                      onChange={(e)=>{setwednesday(e.target.checked)}}
                    />
                  </div>
                </div>
                <div className="form-check form-switch my-3">
                  <div className="row justify-content-between">
                    <label className="form-check-label" htmlFor="thursday">
                      Thursday
                    </label>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="thursday"
                      name="thursday"
                      checked={thursday}
                      onChange={(e)=>{setthursday(e.target.checked)}}
                    />
                  </div>
                </div>
                <div className="form-check form-switch my-3">
                  <div className="row justify-content-between">
                    <label className="form-check-label" htmlFor="friday">
                      Friday
                    </label>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="friday"
                      name="friday"
                      checked={friday}
                      onChange={(e)=>{setfriday(e.target.checked)}}
                    />
                  </div>
                </div>
                <div className="form-check form-switch my-3">
                  <div className="row justify-content-between">
                    <label className="form-check-label" htmlFor="saturday">
                      Saturday
                    </label>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="saturday"
                      name="saturday"
                      checked={saturday}
                      onChange={(e)=>{setsaturday(e.target.checked)}}
                    />
                  </div>
                </div>
              </div>
              <div className="text-end mt-5">
                <hr />
                <button className="btn btn-primary my-5" onClick={handleUpdate}>Update Item</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ItemManagementTable;
