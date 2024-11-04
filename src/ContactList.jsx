import React from "react";
import ContactItem from "./ContactItem";

function ContactList({ contacts }) {
  return (
    <div className="contact-list">
      {contacts.map((contact) => {
        <ContactItem
          key={contact.id}
          imageUrl={contact.imageUrl}
          name={contact.name}
          tag={contact.tag}
        />;
      })}
    </div>
  );
}

export default ContactList;
