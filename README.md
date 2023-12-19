# Buzznote

A notion clone created using Next js 13, Convex, Tailwind CSS

## Screenshots

![App Screenshot](https://i.imgur.com/Og3WXUx.png)

## Demo

https://buzznote.vercel.app/

## Features

- Real-time database 🔗
- Notion-style editor 📝
- Light and Dark mode 🌓
- Infinite children documents 🌲
- Trash can & soft delete 🗑
- Authentication 🔐
- File upload
- File deletion
- File replacement
- Icons for each document (changes in real-time) 🌠
- Expandable sidebar ➡🔀⬅
- Full mobile responsiveness 📱
- Publish your note to the web 🌐
- Fully collapsable sidebar ↕
- Landing page 🛬
- Cover image of each document 🖼
- Recover deleted files 🔄📄

## Installation

Install with npm

```bash
  npm install

```

## Run Locally

Clone the project

```bash
  git clone https://github.com/pawan67/buzznote
```

Go to the project directory

```bash
  cd buzznote
```

Install dependencies

```bash
  npm install
```

Start the server at port 3000

```bash
  npm run dev
```

## Build and deploy

To Build this project run

```bash
  npm run build
```

To start build server

```bash
  npm run start
```

For Deploying with vercel

https://docs.convex.dev/production/hosting/vercel

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`CONVEX_DEPLOYMENT`
`NEXT_PUBLIC_CONVEX_URL`

`NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
`CLERK_SECRET_KEY`

`EDGE_STORE_ACCESS_KEY`
`EDGE_STORE_SECRET_KEY`
