import React from "react";

function DeliveryArea() {
  return (
    <>
      <h6 className="px-1">DELIVERY AREA</h6>
      <hr />
      <br />
      <nav>
        <div
          className="nav nav-tabs settingsnavs justify-content-center"
          id="nav-tab"
          role="tablist"
        >
          <button
            className="nav-link active deliveryareabtn"
            id="takeaway-tab"
            data-bs-toggle="tab"
            data-bs-target="#takeaway"
            type="button"
            role="tab"
            aria-controls="takeaway"
            aria-selected="false"
          >
            Take Away Location
          </button>
          <button
            className="nav-link deliveryareabtn"
            id="delivery-zones-tab"
            data-bs-toggle="tab"
            data-bs-target="#delivery-zones"
            type="button"
            role="tab"
            aria-controls="delivery-zones"
            aria-selected="false"
          >
            Delivery Zones
          </button>
        </div>
      </nav>
      <div className="tab-content" id="nav-tabContent">
        <div
          className="tab-pane fade show active"
          id="takeaway"
          role="tabpanel"
          aria-labelledby="takeaway-tab"
        >
          <div className="container bs br my-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13611.200265534018!2d74.3023612!3d31.4746856!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd90d41edbbe08d45!2sINNOVATION.TECH!5e0!3m2!1sen!2s!4v1660646556492!5m2!1sen!2s"
              className="takeaway-map"
              width="850"
              height="650"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="delivery-zones"
          role="tabpanel"
          aria-labelledby="delivery-zones-tab"
        >
          <div className="container my-4 py-4 px-5 bs br">
            <label htmlFor="redeem" className="">
              Excluded Postal Codes
            </label>
            <input
              id="redeem"
              className="form-control my-2 py-2"
              type="number"
              placeholder="add coma seperated codes"
            />
            <button className="btn btn-primary">Save</button>
            <div className="row">
              <div className="col-md-8">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13611.200265534018!2d74.3023612!3d31.4746856!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd90d41edbbe08d45!2sINNOVATION.TECH!5e0!3m2!1sen!2s!4v1660646556492!5m2!1sen!2s"
                  className="takeaway-map"
                  width="550"
                  height="450"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div className="col-md-4">
                <button className="btn btn-light my-5 bs w-100">zone1</button>
                <button className="btn btn-primary mb-5">
                  Add another zone
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DeliveryArea;
