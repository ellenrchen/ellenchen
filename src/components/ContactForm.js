import React from "react";

const ContactForm = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    fetch('http://localhost:3000/send', {
        method: "POST",
        body: JSON.stringify(this.state),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      }).then(
      (response) => (response.json())
        ).then((response)=> {
      if (response.status === 'success') {
        alert("Message Sent.");
        this.resetForm()
      } else if(response.status === 'fail') {
        alert("Message failed to send.")
      }
    })
  }
  return (
        <form id="contact-form">
            {/* onSubmit={this.handleSubmit.bind(this)} method="POST"> */}
            <div className = "form-group">
                <label>Name</label>
                <input type="text"/>
            </div>
            <div className = "form-group">
                <label>Email</label>
                <input type="email"/>
            </div>
            <div className = "form-group">
                <label>Message</label>
                <textarea className = "form-control" rows="5"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
                Submit
            </button>
        </form>
    );
};

export default ContactForm;
