const fs = require("fs");
module.exports = (req, res, next) => {
  if (req.session.isloggedin === true && req.session.isVerified === true)
    next();
  else if (req.session.isloggedin === true && !req.session.isVerified)
    res.render("notVerified");
  else {
    data = [
        {
            image: "Artpencils.png",
            name: "Artpencils",
            Price: "48",
            id: 1,
            quantity: 5,
          },
          {
            image: "Calculator.png",
            name: "Calculator",
            Price: "499",
            id: 2,
            quantity: 10,
          },
          {
            image: "Eraser.png",
            name: "Eraser",
            Price: "9",
            id: 3,
            quantity: 3,
          },
          {
            image: "File.png",
            name: "File",
            Price: "148",
            id: 4,
            quantity: 5,
          },
          {
            image: "Highlighter.png",
            name: "Highlighter",
            Price: "99",
            id: 5,
            quantity: 7,
          },
          {
            image: "Journal.png",
            name: "Journal",
            Price: "399",
            id: 6,
            quantity: 3,
          },
          {
            image: "Magnifier.png",
            name: "Magnifier",
            Price: "410",
            id: 7,
            quantity: 6,
          },
          {
            image: "Markers.png",
            name: "Markers",
            Price: "50",
            id: 8,
            quantity: 10,
          },
          {
            image: "Notebooks3.png",
            name: "Notebooks3",
            Price: "600",
            id: 9,
            quantity: 5,
          },
          {
            image: "Notebooksmall.png",
            name: "Notebooksmall",
            Price: "200",
            id: 10,
            quantity: 8,
          },
          {
            image: "Notepad.png",
            name: "Notepad",
            Price: "349",
            id: 11,
            quantity: 5,
          },
          {
            image: "Paints.png",
            name: "Paints",
            Price: "400",
            id: 12,
            quantity: 9,
          },
          {
            image: "Paperclips.png",
            name: "Paperclips",
            Price: "300",
            id: 13,
            quantity: 6,
          },
          {
            image: "Pen.png",
            name: "Pen",
            Price: "10",
            id: 14,
            quantity: 7,
          },
          {
            image: "Pencil.png",
            name: "Pencil",
            Price: "10",
            id: 15,
            quantity: 8,
          },
          {
            image: "Penstand.png",
            name: "Penstand",
            Price: "140",
            id: 15,
            quantity: 8,
          },
          {
            image: "Planner.png",
            name: "Planner",
            Price: "100",
            id: 15,
            quantity: 8,
          },
          {
            image: "Punches.png",
            name: "Punches",
            Price: "90",
            id: 15,
            quantity: 8,
          },
          {
            image: "Scissor.png",
            name: "Scissor",
            Price: "60",
            id: 15,
            quantity: 8,
          },
          {
            image: "Stapler.png",
            name: "Stapler",
            Price: "54",
            id: 15,
            quantity: 8,
          },
          {
            image: "StickyNote.png",
            name: "StickyNote",
            Price: "90",
            id: 15,
            quantity: 8,
          },
          {
            image: "Tapedispenser.png",
            name: "Tapedispenser",
            Price: "199",
            id: 15,
            quantity: 8,
          },
          {
            image: "Whitner.png",
            name: "Whitner",
            Price: "25",
            id: 15,
            quantity: 8,
          },
    ];
    fs.writeFile("products.txt", JSON.stringify(data), (err) => {
      if (err) return;
    });
    res.render("main");
  }
};