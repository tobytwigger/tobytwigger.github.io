---
slug: swytch-tools
name: Swytch Tools
images:
  - src: "/assets/img/projects/swytchtools/order_index.png"
    alt: "Order Index"
    caption: "View all orders"
    description: "View all orders from all order sources in a single place"
    dark: true
  - src: "/assets/img/projects/swytchtools/order.png"
    alt: "View an Order"
    caption: "View Orders"
    description: "Dive into a specific order to see its details, dispatches and customer information. Warranty 
    orders can also be raised from here."
    dark: true
  - src: "/assets/img/projects/swytchtools/order_ai.png"
    alt: "Order AI"
    caption: "Order AI"
    description: "Ask for information about a specific order. Swytch Tools will automatically supply the context to 
    the LLM."
    dark: true
  - src: "/assets/img/projects/swytchtools/fulfilment.png"
    alt: "Fulfilment"
    caption: "Fulfilment Tools"
    description: "Automate the fulfilment process. Schedule and plan dispatches for orders based on stock levels and 
    due dates."
    dark: true
  - src: "/assets/img/projects/swytchtools/stock_forecasting.png"
    alt: "Stock Forecasting"
    caption: "Stock Forecasting"
    description: "Forecast the stock levels for each SKU over time."
    dark: true
  - src: "/assets/img/projects/swytchtools/ai_chat.png"
    alt: "AI Chat"
    caption: "AI Chat"
    description: "Ask questions about data, products or anything else. This AI uses a model router and advanced 
    workflows to optimise the responses."
    dark: true
  - src: "/assets/img/projects/swytchtools/sku_bundles.png"
    alt: "SKU Bundles"
    caption: "SKU Bundles"
    description: "Create bundles of SKUs for easy ordering and fulfilment. The system will automatically fulfil 
    orders using bundles if they are in stock."
    dark: true
---

# Swytch Tools

Swytch had several unique challenges when dealing with operations. Using a pre-order model and trying to keep stock 
levels low is hard to manage manually.

As a result, Swytch Tools was created to enable the management of orders, stock, fulfilment and more. Its uses 
spread from customer services using it to check on order statuses and reply to tickets, to warehouse staff printing 
off labels for international shipping and forecasting stock management.

## Tech Stack

Swytch Tools has been built using Laravel & Vue. It makes use of a lot of other packages for certain functionalities.


## Features

Being an internal ERP system, a lot of the features are unique to Swytch. However, over the last couple of years 
we've worked on standardising our processes and tools to make them more useful outside Swytch.

{% include elements/carousel.html images=page.images id="features" %}

Here is a selection of features that Swytch Tools provides:

- Customer overview - see all information we hold on a customer
- Order management - create, update and track orders.
- Order source importing - Import from multiple different sources (WooCommerce, Shopify, Amazon, etc)
- Fulfilment - schedule and plan order fulfilment based on stock levels. The system can automatically determine the 
  most effective way to fulfil orders.
- Virtual SKUs - supports kitted products & bundles
- Stock forecasting - in depth detail on stock levels over time
- Returns management - track, update and process returns. Print and send labels with different couriers.
- Invoices - produce and send commercial invoices to customers, for payment and customs purposes.
- ASNs - track and manage incoming stock
- Sales forecasting - forecast sales for the coming months, based on previous sales data and segmentations.
- AI - Question data and get answers.

Swytch Tools also includes a warehouse management system, which runs our warehouse in Norwich. 

- Stock management - see and manage live stock in warehouses
- Manufacturing - allow staff to build e.g. wheels using component parts and support work orders
- Returns - check in, fault find and process returns
- ASNs - check in stock to the warehouse and build discrepancy reports
