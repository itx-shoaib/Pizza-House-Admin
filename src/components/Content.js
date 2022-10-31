import React,{useState,useEffect} from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useParams } from "react-router-dom";


function Content() {

  const {id} = useParams();
     // For Gallery
  const [link, setlink] = useState("");
  const [image, setimage] = useState("");

  // For content
  const [frontendtemplate, setfrontendtemplate] = useState("");
  const [fadmintemplate, setfadmintemplate] = useState("");
  const [pcolor, setpcolor] = useState("");
  const [scolor, setscolor] = useState("");
  const [title1, settitle1] = useState("");
  const [title2, settitle2] = useState("");
  const [description1, setdescription1] = useState("");
  const [bannertext1, setbannertext1] = useState("");
  const [box1title, setbox1title] = useState("");
  const [box1link, setbox1link] = useState("");
  const [box2description, setbox2description] = useState("");
  const [box3title, setbox3title] = useState("");
  const [box3link, setbox3link] = useState("");
  const [box3link2, setbox3link2] = useState("")
  const [menu, setmenu] = useState("")
  const [banner1, setbanner1] = useState("")
  const [banner2, setbanner2] = useState("")
  const [banner3, setbanner3] = useState("")
  const [banner4, setbanner4] = useState("")
  const [banner5, setbanner5] = useState("")
  const [box1icon, setbox1icon] = useState("")
  const [box2icon, setbox2icon] = useState("")
  const [box3icon, setbox3icon] = useState("")
  const [description2, setdescription2] = useState("")
  const [bannertext2, setbannertext2] = useState("")
  const [box1description, setbox1description] = useState("")
  const [box2title, setbox2title] = useState("")
  const [box2link, setbox2link] = useState("")
  const [box3description, setbox3description] = useState("")

  // For Timings / CKEditor
  const [description, setdescription] = useState("")
  const inputHandler = (event, editor) => {
    setdescription(editor.getData());
    // alert(parse(editor.getData()).props.children);
      // Define your onSubmit function here
      // ...
      // for example, setData() here
  };

  // For content 
  async function addcontent(e){
    var formData = new FormData();
    formData.append("id",id)
    formData.append("frontendtemplate",frontendtemplate)
    formData.append("fadmintemplate",fadmintemplate)
    formData.append("pcolor",pcolor)
    formData.append("scolor",scolor)
    formData.append("title1",title1)
    formData.append("title2",title2)
    formData.append("description1",description1)
    formData.append("bannertext1",bannertext1)
    formData.append("box1title",box1title)
    formData.append("box1link",box1link)
    formData.append("box2description",box2description)
    formData.append("box3title",box3title)
    formData.append("box3link",box3link)
    formData.append("box3link2",box3link2)
    formData.append("description2",description2)
    formData.append("bannertext2",bannertext2)
    formData.append("box1description",box1description)
    formData.append("box2title",box2title)
    formData.append("box2link",box2link)
    formData.append("box3description",box3description)

    formData.append("menu",menu)
    formData.append("banner1",banner1)
    formData.append("banner2",banner2)
    formData.append("banner3",banner3)
    formData.append("banner4",banner4)
    formData.append("banner5",banner5)
    formData.append("box1icon",box1icon)
    formData.append("box2icon",box2icon)
    formData.append("box3icon",box3icon)

    const config = {
      headers:{
          "Content-Type":"multipart/form-data"
      }
  }

  try {
    const result = await axios.post(
      " http://localhost:5000/api/setting/addcontent",
     formData, config
    ).data;
    console.log(result);
    toast.success("Content has been added");

  } catch (error) {
    console.log(error);
    toast.warn("Something went wrong try again!");
  }


    
  }

  async function add(){
    const detail = {
      id,
      description
    }
    try {
      const result = await axios.post("http://localhost:5000/api/setting/addtimings",detail).data;
      console.log(result.message)
      toast.success("Data has been inserted")
      setdescription("")
    } catch (error) {
      console.log(error)
      toast.warn(error.response.data.message)
    }
 
  }

  // For gallery
  async function gallerysave(){
    var formData = new FormData();
    formData.append("id",id)
    formData.append("link",link);
    formData.append("image",image);

    const config = {
      headers:{
          "Content-Type":"multipart/form-data"
      }
  }

    try {
      const result = await axios.post("http://localhost:5000/api/setting/addgallery",formData, config).data;
      console.log(result.message)
      toast.success("Data has been inserted")
      setimage("")
      setlink("")
    } catch (error) {
      console.log(error)
      toast.warn("Something went wrong")
    }

  }

  return (
    <>
    <ToastContainer />
      <h6 className="px-1">CONTENT</h6>
      <hr />
      <br />
      <div className="row">
        <div className="col-md-12">
          <div className="container bs pb-5">
            <h6 className="px-1 pt-4">TIMINGS</h6>
            <hr />
            <br />
            <CKEditor id="inputText" editor={ClassicEditor} onChange={inputHandler} />
            <div className="container mt-5 text-center">
              <button className="btn btn-info py-2" onClick={add}>Save</button>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <form class="row g-3 needs-validation" novalidate>
          <div className="row mt-3">
            <hr />
            <div className="col-md-6">
              <label for="validationCustomUsername" class="form-label">
                Frontend Template
              </label>
              <select class="form-select" name="frontendtemplate" value={frontendtemplate} onChange={(e)=>{setfrontendtemplate(e.target.value)}} aria-label="Default select example">
                <option value="1">1</option>
                <option value="2">2</option>
              </select>
            </div>
            <div className="col-md-6">
              <label for="validationCustomUsername" class="form-label">
                Box 3 Link
              </label>
              <div class="input-group has-validation">
                <input
                  type="text"
                  placeholder="Box 3 Link"
                  class="form-control"
                  id="validationCustomUsername"
                  aria-describedby="inputGroupPrepend"
                  name="box3link2"
                  value={box3link2}
                  onChange={(e)=>{setbox3link2(e.target.value)}}
                  required
                />
              </div>
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-md-6">
              <label for="validationCustomUsername" class="form-label">
                Frontend & Admin Template
              </label>
              <select class="form-select" name-="fadmintemplate" value={fadmintemplate} onChange={(e)=>{setfadmintemplate(e.target.value)}} aria-label="Default select example">
                <option value="1">1</option>
                <option value="2">2</option>
              </select>
            </div>
            <div className="col-md-3">
              <label for="validationCustomUsername" class="form-label">
                Menu
              </label>
              <div class="input-group has-validation">
                <input
                  type="file"
                  class="form-control"
                  id="validationCustomUsername"
                  aria-describedby="inputGroupPrepend"
                  name="menu"
                  onChange={(e)=>{setmenu(e.target.files[0])}}
                  // value={menu}
                  required
                />
              </div>
            </div>
            <div className="col-md-3">
              <label for="validationCustomUsername" class="form-label">
                Banner 1
              </label>
              <div class="input-group has-validation">
                <input
                  type="file"
                  class="form-control"
                  id="validationCustomUsername"
                  aria-describedby="inputGroupPrepend"
                  name="banner1"
                  // value={banner1}
                  onChange={(e)=>{setbanner1(e.target.files[0])}}
                  required
                />
              </div>
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-md-6">
              <label for="validationCustomUsername" class="form-label">
                Primary Color
              </label>
              <div class="input-group has-validation">
                <input
                  type="text"
                  placeholder="#2E3190"
                  class="form-control"
                  id="validationCustomUsername"
                  aria-describedby="inputGroupPrepend"
                  name="pcolor"
                  value={pcolor}
                  onChange={(e)=>{setpcolor(e.target.value)}}
                  required
                />
              </div>
            </div>
            <div className="col-md-3">
              <label for="validationCustomUsername" class="form-label">
                Banner 2
              </label>
              <div class="input-group has-validation">
                <input
                  type="file"
                  class="form-control"
                  id="validationCustomUsername"
                  aria-describedby="inputGroupPrepend"
                  name="banner2"
                  // value={banner2}
                  onChange={(e)=>{setbanner2(e.target.files[0])}}
                  required
                />
              </div>
            </div>
            <div className="col-md-3">
              <label for="validationCustomUsername" class="form-label">
                Banner 3
              </label>
              <div class="input-group has-validation">
                <input
                  type="file"
                  class="form-control"
                  id="validationCustomUsername"
                  aria-describedby="inputGroupPrepend"
                  name="banner3"
                  // value={banner3}
                  onChange={(e)=>{setbanner3(e.target.files[0])}}
                  required
                />
              </div>
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-md-6">
              <label for="validationCustomUsername" class="form-label">
                Secondary Color
              </label>
              <div class="input-group has-validation">
                <input
                  type="text"
                  placeholder="#25185873"
                  class="form-control"
                  id="validationCustomUsername"
                  aria-describedby="inputGroupPrepend"
                  name="scolor"
                  value={scolor}
                  onChange={(e)=>{setscolor(e.target.value)}}
                  required
                />
              </div>
            </div>
            <div className="col-md-3">
              <label for="validationCustomUsername" class="form-label">
                Banner 4
              </label>
              <div class="input-group has-validation">
                <input
                  type="file"
                  class="form-control"
                  id="validationCustomUsername"
                  aria-describedby="inputGroupPrepend"
                  name="banner4"
                  // value={banner4}
                  onChange={(e)=>{setbanner4(e.target.files[0])}}
                  required
                />
              </div>
            </div>
            <div className="col-md-3">
              <label for="validationCustomUsername" class="form-label">
                Banner 5
              </label>
              <div class="input-group has-validation">
                <input
                  type="file"
                  class="form-control"
                  id="validationCustomUsername"
                  aria-describedby="inputGroupPrepend"
                  name="banner5"
                  onChange={(e)=>{setbanner5(e.target.files[0])}}
                  // value={banner5}
                  required
                />
              </div>
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-md-6">
              <label for="validationCustomUsername" class="form-label">
                Title 1
              </label>
              <div class="input-group has-validation">
                <input
                  type="text"
                  placeholder="FRESH & QUALITY FOOD"
                  class="form-control"
                  id="validationCustomUsername"
                  aria-describedby="inputGroupPrepend"
                  name="title1"
                  value={title1}
                  onChange={(e)=>{settitle1(e.target.value)}}
                  required
                />
              </div>
            </div>
            <div className="col-md-3">
              <label for="validationCustomUsername" class="form-label">
                Box 1 icon
              </label>
              <div class="input-group has-validation">
                <input
                  type="file"
                  class="form-control"
                  id="validationCustomUsername"
                  aria-describedby="inputGroupPrepend"
                  name="box1icon"
                  // value={box1icon}
                  onChange={(e)=>{setbox1icon(e.target.files[0])}}
                  required
                />
              </div>
            </div>
            <div className="col-md-3">
              <label for="validationCustomUsername" class="form-label">
                Box 2 icon
              </label>
              <div class="input-group has-validation">
                <input
                  type="file"
                  class="form-control"
                  id="validationCustomUsername"
                  aria-describedby="inputGroupPrepend"
                  name="box2icon"
                  // value={box2icon}
                  onChange={(e)=>{setbox2icon(e.target.files[0])}}
                  required
                />
              </div>
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-md-6">
              <label for="validationCustomUsername" class="form-label">
                Title 2
              </label>
              <div class="input-group has-validation">
                <input
                  type="text"
                  placeholder="Why Us?"
                  class="form-control"
                  id="validationCustomUsername"
                  aria-describedby="inputGroupPrepend"
                  name="title2"
                  value={title2}
                  onChange={(e)=>{settitle2(e.target.value)}}
                  required
                />
              </div>
            </div>
            <div className="col-md-3">
              <label for="validationCustomUsername" class="form-label">
                Box 3 icon
              </label>
              <div class="input-group has-validation">
                <input
                  type="file"
                  class="form-control"
                  id="validationCustomUsername"
                  aria-describedby="inputGroupPrepend"
                  name="box3icon"
                  // value={box3icon}
                  onChange={(e)=>{setbox3icon(e.target.files[0])}}
                  required
                />
              </div>
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-md-6">
              <label for="validationCustomUsername" class="form-label">
                Description 1
              </label>
              <div class="input-group has-validation">
                <input
                  type="text"
                  placeholder="Quality in Food ensures that we get the freshest of ingredients and produce every single day for all of our taste dishes."
                  class="form-control"
                  id="validationCustomUsername"
                  aria-describedby="inputGroupPrepend"
                  name="description1"
                  value={description1}
                  onChange={(e)=>{setdescription1(e.target.value)}}
                  required
                />
              </div>
            </div>
            <div className="col-md-6">
              <label for="validationCustomUsername" class="form-label">
                Description 2
              </label>
              <div class="input-group has-validation">
                <input
                  type="text"
                  placeholder="We are pleased to offer good quality and quantity at affordable prices. Only the freshest and best quality ingredients are used in the preparation of our food items."
                  class="form-control"
                  id="validationCustomUsername"
                  aria-describedby="inputGroupPrepend"
                  name="description2"
                  value={description2}
                  onChange={(e)=>{setdescription2(e.target.value)}}
                  required
                />
              </div>
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-md-6">
              <label for="validationCustomUsername" class="form-label">
                Banner Text 1
              </label>
              <div class="input-group has-validation">
                <input
                  type="text"
                  placeholder="We keep it Simple,Fresh and Real"
                  class="form-control"
                  id="validationCustomUsername"
                  aria-describedby="inputGroupPrepend"
                  name="bannertext1"
                  value={bannertext1}
                  onChange={(e)=>{setbannertext1(e.target.value)}}
                  required
                />
              </div>
            </div>
            <div className="col-md-6">
              <label for="validationCustomUsername" class="form-label">
                Banner Text 2
              </label>
              <div class="input-group has-validation">
                <input
                  type="text"
                  placeholder="Now Order All Favourite Food Online"
                  class="form-control"
                  id="validationCustomUsername"
                  aria-describedby="inputGroupPrepend"
                  name="bannertext2"
                  value={bannertext2}
                  onChange={(e)=>{setbannertext2(e.target.value)}}
                  required
                />
              </div>
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-md-6">
              <label for="validationCustomUsername" class="form-label">
                Box 1 Title
              </label>
              <div class="input-group has-validation">
                <input
                  type="text"
                  placeholder="Easy To Order."
                  class="form-control"
                  id="validationCustomUsername"
                  aria-describedby="inputGroupPrepend"
                  name="box1title"
                  value={box1title}
                  onChange={(e)=>{setbox1title(e.target.value)}}
                  required
                />
              </div>
            </div>
            <div className="col-md-6">
              <label for="validationCustomUsername" class="form-label">
                Box 1 Description
              </label>
              <div class="input-group has-validation">
                <input
                  type="text"
                  placeholder="You can now order online, all your favourite dishes and many more delicious options, and have them delivered straight to your door in no time at all."
                  class="form-control"
                  id="validationCustomUsername"
                  aria-describedby="inputGroupPrepend"
                  name="box1description"
                  value={box1description}
                  onChange={(e)=>{setbox1description(e.target.value)}}
                  required
                />
              </div>
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-md-6">
              <label for="validationCustomUsername" class="form-label">
                Box 1 Link
              </label>
              <div class="input-group has-validation">
                <input
                  type="text"
                  placeholder="Box 1 Link"
                  class="form-control"
                  id="validationCustomUsername"
                  aria-describedby="inputGroupPrepend"
                  name="box1link"
                  value={box1link}
                  onChange={(e)=>{setbox1link(e.target.value)}}
                  required
                />
              </div>
            </div>
            <div className="col-md-6">
              <label for="validationCustomUsername" class="form-label">
                Box 2 Title
              </label>
              <div class="input-group has-validation">
                <input
                  type="text"
                  placeholder="Quality Food"
                  class="form-control"
                  id="validationCustomUsername"
                  aria-describedby="inputGroupPrepend"
                  name="box2title"
                  value={box2title}
                  onChange={(e)=>{setbox2title(e.target.value)}}
                  required
                />
              </div>
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-md-6">
              <label for="validationCustomUsername" class="form-label">
                Box 2 Description
              </label>
              <div class="input-group has-validation">
                <input
                  type="text"
                  placeholder="Order food online! It's so easy to use, fast and convenient. Try our new, online website which contains our entire takeaway menu."
                  class="form-control"
                  id="validationCustomUsername"
                  aria-describedby="inputGroupPrepend"
                  name="box2description"
                  value={box2description}
                  onChange={(e)=>{setbox2description(e.target.value)}}
                  required
                />
              </div>
            </div>
            <div className="col-md-6">
              <label for="validationCustomUsername" class="form-label">
                Box 2 Link
              </label>
              <div class="input-group has-validation">
                <input
                  type="text"
                  placeholder="Box 2 Link"
                  class="form-control"
                  id="validationCustomUsername"
                  aria-describedby="inputGroupPrepend"
                  name="box2link"
                  value={box2link}
                  onChange={(e)=>{setbox2link(e.target.value)}}
                  required
                />
              </div>
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-md-6">
              <label for="validationCustomUsername" class="form-label">
                Box 3 Title
              </label>
              <div class="input-group has-validation">
                <input
                  type="text"
                  placeholder="Thank You"
                  class="form-control"
                  id="validationCustomUsername"
                  aria-describedby="inputGroupPrepend"
                  name="box3title"
                  value={box3title}
                  onChange={(e)=>{setbox3title(e.target.value)}}
                  required
                />
              </div>
            </div>
            <div className="col-md-6">
              <label for="validationCustomUsername" class="form-label">
                Box 3 Description
              </label>
              <div class="input-group has-validation">
                <input
                  type="text"
                  placeholder="Thank you for visiting our Website We hope you enjoy our online ordering website and your food."
                  class="form-control"
                  id="validationCustomUsername"
                  aria-describedby="inputGroupPrepend"
                  name="box3description"
                  value={box3description}
                  onChange={(e)=>{setbox3description(e.target.value)}}
                  required
                />
              </div>
            </div>
            <div className="col-md-6">
              <label for="validationCustomUsername" class="form-label">
                Box 3 Link
              </label>
              <div class="input-group has-validation">
                <input
                  type="text"
                  placeholder="Box 3 Link"
                  class="form-control"
                  id="validationCustomUsername"
                  aria-describedby="inputGroupPrepend"
                  name="box3link"
                  value={box3link}
                  onChange={(e)=>{setbox3link(e.target.value)}}
                  required
                />
              </div>
            </div>
          </div>
          <div class="col-12 mt-3">
            <button class="btn btn-info" type="submit" onClick={addcontent}>
              Save
            </button>
          </div>
        </form>
      </div>

      <div className="row bs mt-5 p-3">
        <h6 className="mt-3">GALLERY</h6>
        <hr style={{ padding: "0px" }} />
        <br />

        <div className="col-md-12 mt-3">
          <label for="validationCustomUsername" class="form-label">
            Link
          </label>
          <div class="input-group has-validation">
            <input
              type="text"
              placeholder="Link"
              class="form-control"
              id="validationCustomUsername"
              aria-describedby="inputGroupPrepend"
              name="link"
              value={link}
              onChange={(e)=>{setlink(e.target.value)}}
              required
            />
          </div>
        </div>

        <div className="col-md-12 mt-3">
          <label for="validationCustomUsername" class="form-label">
            Gallery Image
          </label>
          <div class="input-group has-validation">
            <input
              type="file"
              class="form-control"
              id="validationCustomUsername"
              aria-describedby="inputGroupPrepend"
              name="image"
              onChange={(e)=>{setimage(e.target.files[0])}}
              required
            />
          </div>

          <input type="hidden" value={id} name="id" />
        </div>

        <div className="col-md-12 text-center mt-3">
          <i class="fa-solid fa-camera text-muted fa-10x"></i>
        </div>

        <div className="container mt-3 text-center">
          <button className="btn btn-info w-100" onClick={gallerysave}>Save</button>
        </div>
        <hr style={{ padding: "0px" }} className="mt-4" />
      </div>
    </>
  );
}

export default Content;
