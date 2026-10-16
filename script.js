// // ============ task-1  ================
// // Employee Role Access System

let role = prompt("Enter your role admin, manager, develper, intern.");

switch (role.toLowerCase().trim()) {
  case "admin":
    alert("Full sytem Access");
    break;

  case "manager":
    alert("Team management Access");
    break;
  case "develper":
    alert("Code Access");
    break;
  case "Intern":
    alert("Linimted Access");
    break;
  default:
    alert("wrong input");
}

// ============== Task-2 =================
// Online Payment Method Selection

let paymentMethods = prompt(
  "Choose payment method (credit / debit / upi / cod)",
);

switch (paymentMethods.toLocaleLowerCase().trim()) {
  case "credit":
    alert("You selected Credit Card Payment.");
    break;

  case "debit":
    alert("You selected Debit Card Payment");
    break;
  case "upi":
    alert("You selected UPI Payment.");
    break;
  case "cod":
    alert("You selected Cash on Delivery.");
    break;
  default:
    alert("Invalid payment method. Please choose credit, debit, upi, or cod.");
}

// ================== Task-3 =================
// Order Status Checker

let status = prompt(
  "Enter order status (placed / packed / shipped / delivered / cancelled)",
);

switch (status.toLowerCase().trim()) {
  case "placed":
    alert("Your order has been placed successfully!");
    break;

  case "packed":
    alert("Your order has been packed and is ready for shipping.");
    break;

  case "shipped":
    alert("Your order has been shipped and is on its way!");
    break;

  case "delivered":
    alert("Your order has been delivered successfully!");
    break;

  case "cancelled":
    alert("Your order has been cancelled.");
    break;

  default:
    alert("Invalid order status. Please enter a valid status.");
}

// =============== Task-4 =================
// Office Working Day Checker

let day = prompt("Enter day name (Monday – Sunday)");

switch ((day.trim(), toLowerCase())) {
  case "monday":
  case "tuesday":
  case "wednesday":
  case "thursday":
    alert("Working day");
    break;

  case "friday":
    alert("Half day");
    break;

  case "saturday":
  case "sunday":
    alert("Holiday");
    break;

  default:
    alert("Invalid day name. Please enter Monday to Sunday.");
}
