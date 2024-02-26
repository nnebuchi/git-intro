const products = [
    {
      "id": 1,
      "name": "Wireless Bluetooth Headphones",
      "price": 49.99,
      "description": "High-quality over-ear headphones with built-in Bluetooth technology for a seamless wireless experience.",
      "category": "Electronics",
      "image": "headphones.jpg"
    },
    {
      "id": 2,
      "name": "Smart Fitness Tracker Watch",
      "price": 79.99,
      "description": "Track your fitness goals with this sleek and feature-rich smartwatch. Monitor heart rate, steps, and more.",
      "category": "Wearables",
      "image": "smartwatch.jpg"
    },
    {
      "id": 3,
      "name": "Professional DSLR Camera",
      "price": 899.99,
      "description": "Capture stunning photos and videos with this high-performance DSLR camera. Ideal for photography enthusiasts and professionals.",
      "category": "Cameras",
      "image": "dslr_camera.jpg"
    },
    {
      "id": 4,
      "name": "Stylish Leather Backpack",
      "price": 59.99,
      "description": "A fashionable and durable leather backpack for carrying your essentials in style. Perfect for daily use or travel.",
      "category": "Fashion",
      "image": "leather_backpack.jpg"
    },
    {
      "id": 5,
      "name": "10-Piece Cookware Set",
      "price": 129.99,
      "description": "Upgrade your kitchen with this high-quality stainless steel cookware set. Perfect for cooking a variety of delicious meals.",
      "category": "Home & Kitchen",
      "image": "cookware_set.jpg"
    },
    {
      "id": 6,
      "name": "Gaming Laptop with RGB Keyboard",
      "price": 1299.99,
      "description": "Immerse yourself in gaming with this powerful laptop featuring a high-refresh-rate display and customizable RGB keyboard.",
      "category": "Computers",
      "image": "gaming_laptop.jpg"
    },
    {
      "id": 7,
      "name": "Vintage Vinyl Record Player",
      "price": 179.99,
      "description": "Experience the nostalgia of vinyl with this vintage-style record player. Features built-in speakers and Bluetooth connectivity.",
      "category": "Audio",
      "image": "record_player.jpg"
    },
    {
      "id": 8,
      "name": "Outdoor Camping Tent",
      "price": 89.99,
      "description": "Stay comfortable during your camping adventures with this spacious and easy-to-set-up outdoor tent. Sleeps up to four people.",
      "category": "Outdoor & Recreation",
      "image": "camping_tent.jpg"
    },
    {
      "id": 9,
      "name": "Wireless Charging Pad",
      "price": 29.99,
      "description": "Charge your compatible devices effortlessly with this sleek wireless charging pad. Compatible with smartphones and other Qi-enabled devices.",
      "category": "Accessories",
      "image": "charging_pad.jpg"
    },
    {
      "id": 10,
      "name": "Robot Vacuum Cleaner",
      "price": 199.99,
      "description": "Keep your home clean without lifting a finger. This robot vacuum cleaner intelligently navigates and cleans various floor surfaces.",
      "category": "Appliances",
      "image": "robot_vacuum.jpg"
    }
  ]
  
  const populateTable = () => {
    const tableBody = document.querySelector('#data-table tbody');
    
    products.forEach((product)=>{
        let tr = document.createElement('tr');
        tr.innerHTML = `
        <th scope="row">${product.id}</th>
        <td>${product.name}</td>
        <td>$${product.price}</td>
        <td><button class="btn btn-danger">Delete</button></td>`;
        tableBody.appendChild(tr);
        
    })
    // console.log(tableBody);
  }

  populateTable();