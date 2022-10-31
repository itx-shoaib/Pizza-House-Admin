import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../components/Menu.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function MenuTable() {
  const [category, setcategory] = useState([]);
  const [categoryID, setcategoryID] = useState('');
  const [item, setItem] = useState([]);
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [description, setdescription] = useState("");
  const [price, setPrice] = useState("");
  const [file,setFile] = useState("");
  const refCloseadd = useRef(null);
  const refCloseedit = useRef(null);
  const refCloseimage = useRef(null);
  const refClosecategory = useRef(null);
  const [discountable, setdiscountable] = useState(false)
  const [editdiscountable, seteditdiscountable] = useState(false)
  const [discountableitem, setdiscountableitem] = useState(false)
  const [sunday, setsunday] = useState(false);
  const [monday, setmonday] = useState(false);
  const [tuesday, settuesday] = useState(false);
  const [wednesday, setwednesday] = useState(false);
  const [thursday, setthursday] = useState(false);
  const [friday, setfriday] = useState(false);
  const [saturday, setsaturday] = useState(false);


  async function add() {
    const user = {
      name,
      discountable
    };

    try {
      const result = await axios.post(
        " http://localhost:5000/api/admin/createmenu",
        user
      ).data;
      console.log(result);
      refClosecategory.current.click();
      update();
      setName("");
    } catch (error) {
      console.log(error);
      toast.warn("Something went wrong try again!");
    }
  }

  async function update() {
    try {
      const data = await (
        await axios.get("http://localhost:5000/api/admin/getallmenu")
      ).data;
      setcategory(data.data);
      console.log(category);
    } catch (error) {
      console.log(error);
    }
  }

  async function del(ID) {
    const user = {
      ID,
    };

    try {
      const result = await axios.post(
        " http://localhost:5000/api/admin/deletemenu",
        user
      ).data;
      console.log(result);
      toast.success("Category has been deleted");
      setInterval(() => {
        update();
      }, 2000);
    } catch (error) {
      console.log(error);
      toast.warn("Something went wrong try again!");
    }
  }

  async function edit(ID) {
    const user = {
      ID,
      title,
      editdiscountable,
      sunday,
      monday,
      tuesday,
      wednesday,
      thursday,
      friday,
      saturday
    };

    try {
      const result = await axios.post(
        " http://localhost:5000/api/admin/updatemenu ",
        user
      ).data;
      console.log(result);
      toast.success("Category has been updated");
      refCloseedit.current.click();
      update();
      setTitle("");
    } catch (error) {
      console.log(error);
      toast.warn("Something went wrong try again!");
    }
  }

  async function update1() {
    try {
      const data = await (
        await axios.get("http://localhost:5000/api/admin/getallitems")
      ).data;
      setItem(data.data);
      console.log(item);
    } catch (error) {
      console.log(error);
    }
  }

  async function getID(category_id){
    setcategoryID(category_id)
  }

  async function addItem() {

   var formData = new FormData();
    formData.append("photo",file)
    
    formData.append("title",title);
    formData.append("description",description);
    formData.append("price",price);
    formData.append("categoryID",categoryID)
    formData.append("discountableitem",discountableitem)
console.log(formData);
    // const user = {
    //   category_id
    //   title,
    //   description,
    //   price,
    //   file
    // };
    const config = {
      headers:{
          "Content-Type":"multipart/form-data"
      }
  }
    // alert(image)
    // alert(file)formData,config

    try {
      const result = await axios.post(
        " http://localhost:5000/api/admin/createitem",
       formData, config
      ).data;
      console.log(result);
      update1();
      toast.success("Item has been Added");
      refCloseadd.current.click();
      setName("");
      setTitle("");
      setPrice("");
      setdescription("");
      setFile("");
    } catch (error) {
      console.log(error);
      toast.warn("Something went wrong try again!");
    }
  }

  // async function addItem(category_id) {
  //   var formData = new FormData();
  //   formData.append("photo",file)
 
  //   const config = {
  //     headers:{
  //         "Content-Type":"multipart/form-data"
  //     }
  // }
  // console.log(file)

  //   try {
  //     const result = await axios.post(
  //       " http://localhost:5000/api/admin/imageuploadcheck",
  //       formData,config
  //     ).data;
  //     console.log(result);
  //     update1();
  //     toast.success("Item has been Added");
  //     refCloseadd.current.click();
  //     setName("");
  //     setTitle("");
  //     setPrice("");
  //     setdescription("");
  //     setFile("");
  //   } catch (error) {
  //     console.log(error);
  //     toast.warn("Something went wrong try again!");
  //   }
  // }

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await (
          await axios.get("http://localhost:5000/api/admin/getallmenu")
        ).data;
        setcategory(data.data);
        console.log(category);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);
  // function onchange(e){
  //   setFile(e.target.files[0])
  //   console.log(e.target.files[0])

  // }

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await (
          await axios.get("http://localhost:5000/api/admin/getallitems")
        ).data;
        setItem(data.data);
        console.log(item);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <ToastContainer />
      <div className="row sharebox">
        <h3 className="my-3 mx-5 responsiveness">RESTAURANT MENU MANAGEMENT</h3>
        <div className="col-lg-12 bs br mx-5 my-5 py-5 px-5 responsiveness">
          <div className="d-flex justify-content-between mobile-responsive">
            <h6>RESTAURANT MENU MANAGEMENT</h6>

            <button
              type="button"
              className="btn btn-info"
              data-bs-toggle="modal"
              data-bs-target="#newcategory"
            >
              <i className="fa-solid fa-plus btnicon"></i>ADD NEW CATEGORY
            </button>
            <div
              className="modal fade"
              id="newcategory"
              data-bs-backdrop="static"
              data-bs-keyboard="false"
              tabIndex="-1"
              aria-labelledby="newcategoryLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="newcategoryLabel">
                      NEW CATEGORY
                    </h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <input
                      className="form-control my-4 py-2 px-4"
                      placeholder="Category name..."
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                      required
                    />
                    <div className="form-check form-switch">
                      <div className="row justify-content-between">
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
                          onChange={(e)=>{setdiscountable(e.target.checked)}}
                        />
                        
                      </div>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                      ref={refClosecategory}
                    >
                      Close
                    </button>
                    <button
                      type="button"
                      onClick={add}
                      className="btn btn-primary"
                    >
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />
          <hr />
          <br />

          {category &&
            category.map((categorys) => {
              return (
                <>
                  <div className="accordion" id={`accordion${categorys.ID}`}>
                    <div className="accordion-item">
                      <h2
                        className="accordion-header"
                        id={`heading${categorys.ID}`}
                      >
                        <div className="row">
                          <div className="col-md-12">
                            <button
                              className="accordion-button collapsed boldtext"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target={`#collapse${categorys.ID}`}
                              aria-expanded="false"
                              aria-controls={`collapse${categorys.ID}`}
                            >
                              <div className="menuresponsive"> {categorys.Name}</div>
                              <div className="row mlauto menuresponsive">
                                <div className="col-md-12">
                                <button
                                  type="button"
                                  data-bs-toggle="modal"
                                  data-bs-target={`#additemModal${categorys.ID}`}
                                  className="btn btn-info menu-buttons"
                                  onClick={()=>{getID(categorys.ID)}}
                                >
                                  <i className="fa-solid fa-plus"></i>
                                </button>
                                <button
                                  type="button"
                                  data-bs-toggle="modal"
                                  data-bs-target={`#edititemModal${categorys.ID}`}
                                  className="btn btn-warning menu-buttons"
                                  // onClick={() => {
                                  //   edit(categorys.ID);
                                  // }}
                                >
                                  <i className="fa-solid fa-pencil"></i>
                                </button>
                                <button
                                  className="btn btn-danger menu-buttons"
                                  onClick={() => {
                                    del(categorys.ID);
                                  }}
                                >
                                  <i className="fa-solid fa-trash"></i>
                                </button>
                                <button className="btn btn-info menu-buttons">
                                  <i className="fa-solid fa-arrow-down"></i>
                                </button>
                                <button className="btn btn-info menu-buttons">
                                  <i className="fa-solid fa-arrow-up"></i>
                                </button>
                                </div>
                              </div>
                            </button>
                          </div>
                        </div>
                      </h2>

                      <div
                        id={`collapse${categorys.ID}`}
                        className="accordion-collapse collapse"
                        aria-labelledby={`heading${categorys.ID}`}
                        data-bs-parent={`#accordion${categorys.ID}`}
                      >
                        <div className="accordion-body menudetails">
                          <div className="row fullwidth">
                            {item &&
                              item.map((items) => {
                                return (
                                  <>
                                    {items.category_id === categorys.ID ? (
                                      <>
                                        <div className="col-md-4">
                                          <div className="menucards bs">
                                            <Link
                                              to={`/item-management/${items.ID}/${items.category_id}`}
                                              style={{ textDecoration: "none" }}
                                            >
                                              <div className="row blackclr">
                                                <div className="col-md-12">
                                                  <h5 className="d-block">
                                                    {items.Title}
                                                  </h5>
                                                  <p className="mb-5 d-block">
                                                    {items.Title}
                                                  </p>
                                                </div>
                                              </div>
                                            </Link>
                                            <div className="row">
                                              <div className="col-6">
                                                <p>
                                                  {items.Price !==
                                                  "undefined" ? (
                                                    <p>
                                                      $ {items.Price}
                                                      <br />
                                                      AVAILABLE
                                                    </p>
                                                  ) : (
                                                    <>AVAILABLE</>
                                                  )}
                                                </p>
                                              </div>
                                              <div className="col-6 text-end">
                                                <button
                                                  className="btn btn-light"
                                                  type="button"
                                                  data-bs-toggle="modal"
                                                  data-bs-target="#addimgModal"
                                                >
                                                  <i className="fa-solid fa-camera"></i>
                                                </button>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </>
                                    ) : (
                                      <></>
                                    )}
                                  </>
                                );
                              })}
                          </div>
                          {/* <div className="row">
            <div className="col-md-12">
                <div className="menucards">
                <div className="row">
                        <div className="col-md-12">
                        <h5 className="pb-3 d-block mb-5">RICE AND SAUCE</h5>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <p>$0.00<br/>AVAILABLE</p>
                        </div>
                        <div className="col-md-6 text-end">
                            <button className="btn btn-light"><i className="fa-solid fa-camera"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </div> */}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="modal fade"
                    id={`additemModal${categorys.ID}`}
                    tabIndex="-1"
                    // data-id={`${categorys.ID}`}
                    aria-labelledby="additemModalLabel"
                    aria-hidden="true"
                    data-bs-backdrop="static"
                    data-bs-keyboard="false"
                  >
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <form enctype="multipart/form-data">
                        <div className="modal-header">
                          <h5
                            className="modal-title boldtext"
                            id="additemModalLabel"
                          >
                            ADD NEW ITEM
                          </h5>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div className="modal-body">
                          <input
                            className="form-control mb-3"
                            placeholder="Item Name..."
                            name="title"
                            id="title"
                            value={title}
                            onChange={(e) => {
                              setTitle(e.target.value);
                            }}
                          />
                          <textarea
                            className="form-control my-3"
                            placeholder="Item Description..."
                            rows="3"
                            name="description"
                            id="description"
                            value={description}
                            onChange={(e) => {
                              setdescription(e.target.value);
                            }}
                          />
                          <input
                            className="form-control my-3"
                            placeholder="Item Price..."
                            name="price"
                            id="price"
                            value={price}
                            onChange={(e) => {
                              setPrice(e.target.value);
                            }}
                          />
                          <input type="hidden" name="categoryID" id="categoryID" value={categoryID}/>
                          <div className="form-check form-switch my-3">
                            <div className="row justify-content-between">
                              <label
                                className="form-check-label"
                                htmlFor="discountableitem"
                              >
                                Discountable
                              </label>
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="discountableitem"
                                id="discountableitem"
                                onChange={(e)=>{setdiscountableitem(e.target.checked)}}
                              />
                            </div>
                          </div>
                          <div className="input-group my-3">
                            <input
                              type="file"
                              className="form-control"
                              id="photo"
                              name="photo"
                              onChange={(e)=>{setFile(e.target.files[0])}}
                            />
                          </div>
                          <div className="text-center my-3">
                            <img
                              className="modal-img"
                              src=""
                              alt=".."
                              // value={file}
                            />
                          </div>
                          <input type="hidden" id="categoryid" name="categoryid" value={categorys.ID} />
                        </div>
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                            ref={refCloseadd}
                          >
                            Close
                          </button>
                          <button
                            type="button"
                            className="btn btn-primary"
                            onClick={() => {
                              addItem(categorys.ID);
                            }}
                          >
                            Save
                          </button>
                        </div>
                        </form>
                      </div>
                    </div>
                  </div>

                  <div
                    className="modal fade"
                    id={`edititemModal${categorys.ID}`}
                    tabIndex="-1"
                    aria-labelledby="edititemModalLabel"
                    aria-hidden="true"
                    data-bs-backdrop="static"
                    data-bs-keyboard="false"
                  >
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5
                            className="modal-title boldtext"
                            id="edititemModalLabel"
                          >
                            EDIT CATEGORY
                          </h5>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>

                        <div className="modal-body">
                          {/* Change require here */}
                          <input
                            type="text"
                            className="form-control"
                            name={categorys.ID}
                            value={categorys.Name}
                            onChange={(e) => {
                              setcategory(
                                category.map((val) =>
                                  val.ID === categorys.ID
                                    ? { ...val, Name: e.target.value }
                                    : val
                                )
                              );
                              setTitle(e.target.value);
                            }}
                          />
                          {/* Change require end here */}

                          <div className="form-check form-switch my-3">
                            <div className="row justify-content-between">
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
                                checked={categorys.discountable === "True" && true}
                                onChange={(e) => {
                                  setcategory(
                                    category.map((val) =>
                                      val.ID === categorys.ID
                                        ? { ...val, discountable: e.target.checked }
                                        : val
                                    )
                                  );
                                  seteditdiscountable(e.target.checked);
                                }}
                              />
                            </div>
                          </div>
                          <h4 className="mt-3 mb-2 boldtext">Available Days</h4>
                          <div className="form-check form-switch my-2">
                            <div className="row justify-content-between">
                              <label className="form-check-label" htmlFor="sunday">
                                Sunday
                              </label>
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="sunday"
                                onChange={(e)=>{setsunday(e.target.checked)}}
                              />
                            </div>
                          </div>
                          <div className="form-check form-switch my-2">
                            <div className="row justify-content-between">
                              <label className="form-check-label" htmlFor="monday">
                                Monday
                              </label>
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="monday"
                                onChange={(e)=>{setmonday(e.target.checked)}}
                              />
                            </div>
                          </div>
                          <div className="form-check form-switch my-2">
                            <div className="row justify-content-between">
                              <label className="form-check-label" htmlFor="tuesday">
                                Tuesday
                              </label>
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="tuesday"
                                onChange={(e)=>{settuesday(e.target.checked)}}
                              />
                            </div>
                          </div>
                          <div className="form-check form-switch my-2">
                            <div className="row justify-content-between">
                              <label
                                className="form-check-label"
                                htmlFor="wednesday"
                              >
                                Wednesday
                              </label>
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="wednesday"
                                onChange={(e)=>{setwednesday(e.target.checked)}}
                              />
                            </div>
                          </div>
                          <div className="form-check form-switch my-2">
                            <div className="row justify-content-between">
                              <label
                                className="form-check-label"
                                htmlFor="thursday"
                              >
                                Thursday
                              </label>
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="thursday"
                                onChange={(e)=>{setthursday(e.target.checked)}}
                              />
                            </div>
                          </div>
                          <div className="form-check form-switch my-2">
                            <div className="row justify-content-between">
                              <label className="form-check-label" htmlFor="friday">
                                Friday
                              </label>
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="friday"
                                onChange={(e)=>{setfriday(e.target.checked)}}
                              />
                            </div>
                          </div>
                          <div className="form-check form-switch my-2">
                            <div className="row justify-content-between">
                              <label
                                className="form-check-label"
                                htmlFor="saturday"
                              >
                                Saturday
                              </label>
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="saturday"
                                onChange={(e)=>{setsaturday(e.target.checked)}}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                            ref={refCloseedit}
                          >
                            Close
                          </button>
                          <button
                            type="button"
                            className="btn btn-primary"
                            onClick={() => {
                              edit(categorys.ID);
                            }}
                          >
                            Update
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="modal fade"
                    id="addimgModal"
                    tabIndex="-1"
                    aria-labelledby="addimgModalLabel"
                    aria-hidden="true"
                    data-bs-backdrop="static"
                    data-bs-keyboard="false"
                  >
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5
                            className="modal-title boldtext"
                            id="addimgModalLabel"
                          >
                            EDIT ITEM IMAGE
                          </h5>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div className="modal-body">
                          <div className="input-group my-3">
                            <input
                              type="file"
                              className="form-control"
                              id="inputGroupFile02"
                            />
                          </div>
                          <div className="text-center my-3">
                            <img className="modal-img" src="" />
                          </div>
                        </div>
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                            ref={refCloseimage}
                          >
                            Close
                          </button>
                          <button type="button" className="btn btn-primary">
                            Save
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
        </div>
      </div>
    </>
  );
}

export default MenuTable;
