# 🚀 Drivexa Contact API Documentation

This API is used to submit technical documentation requests and contact forms. 

---

### 📡 Endpoint Details
- **Base URL:** `https://driverbackend.printiply.shop`
- **Endpoint:** `/contact.php`
- **Method:** `POST`
- **Content-Type:** `application/json`

---

### 📝 Payload (JSON Body)
The following fields must be sent in the JSON body of your request:

| Field Name | Type | Required | Description |
| :--- | :--- | :--- | :--- |
| `first_name` | String | Yes | User's first name. |
| `last_name` | String | Yes | User's last name. |
| `email` | String | Yes | User's valid email address. |
| `category` | String | Yes | Problem category (e.g., 'Graphics', 'Audio', 'Network'). |
| `message` | String | Yes | Detailed description of the hardware issue. |
| `site_origin` | String | Yes | **(CRITICAL)** The domain of the website sending the request. Use `window.location.hostname`. |

---

### ✅ Response Examples

#### Success (200 OK)
```json
{
    "status": "success",
    "message": "Data saved successfully"
}
```

#### Error
```json
{
    "status": "error",
    "message": "Connection failed / Missing data"
}
```

---

### 💻 Implementation Example (Fetch API)

```javascript
const handleSubmit = async (formData) => {
  // formData should contain: first_name, last_name, email, category, message
  const payload = {
    ...formData,
    site_origin: window.location.hostname // Automatically gets the domain
  };

  try {
    const response = await fetch('https://driverbackend.printiply.shop/contact.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const result = await response.json();
    if (result.status === 'success') {
       console.log("Form Submitted Successfully!");
       // Trigger your success state/modal here
    } else {
       console.error("Backend Error:", result.message);
    }
  } catch (error) {
    console.error("Submission Error:", error);
  }
};
```

### 🔒 Admin Panel Access
View and manage all submissions at: 
`https://driverbackend.printiply.shop/admin/login.php`

---

### ⚙️ CORS Policy
This API allows requests from any origin (`*`). No special CORS headers are required from the client-side.

