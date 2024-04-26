var config = {
  style: "mapbox://styles/pinkluna/cluvcscsj00vn01qj022u0ibs",
  accessToken:
    "pk.eyJ1IjoicGlua2x1bmEiLCJhIjoiY2l3bnoxbGo0MDAwaDJ6b2hnZnIzZjVtMyJ9.Dy-ARkRUcX0p_iVq4ZsoSg",
  showMarkers: false,
  markerColor: "#3FB1CE",
  //projection: 'equirectangular',
  //Read more about available projections here
  //https://docs.mapbox.com/mapbox-gl-js/example/projections/
  inset: false,
  theme: "dark",
  use3dTerrain: false, //set true for enabling 3D maps.
  auto: false,
  footer: "",
  chapters: [
    {
      id: "chapter-0",
      alignment: "left",
      hidden: true,
      description: "",
      location: {
        center: [-80.84363, 35.20505],
        zoom: 9.04,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "city-label",
          opacity: 1,
        },
        {
          layer: "places",
          opacity: 0,
        },
        {
          layer: "intersection",
          opacity: 0,
        },
        {
          layer: "library-points",
          opacity: 0,
        },
        {
          layer: "coffee-points",
          opacity: 0,
        },
        {
          layer: "walking-library",
          opacity: 0,
        },
        {
          layer: "walking-coffee",
          opacity: 0,
        },
        {
          layer: "intersection copy",
          opacity: 0,
        },
      ],
    },
    {
      id: "chapter-1",
      alignment: "left",
      hidden: false,
      description: "This is Charlotte, North Carolina.",
      location: {
        center: [-80.84363, 35.20505],
        zoom: 9.04,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      image: "imgs/legend0.png",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [{ layer: "city-label", opacity: 1 }],
      onChapterExit: [
        {
          layer: "city-label",
          opacity: 0,
        },
      ],
    },
    {
      id: "chapter-2",
      alignment: "left",
      hidden: false,
      image: "imgs/legend1a.png",
      description:
        "My first “walkability” criteria was easy access to a library. So I found all of the <strong>public libraries</strong> within city boundaries and plotted them as <strong id='pink'>pink dots</strong> on the map.",
      location: {
        center: [-80.84363, 35.20505],
        zoom: 9.81,
        pitch: 0,
        bearing: 0,
      },
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "library-points",
          opacity: 1,
          duration: 200,
        },
        {
          layer: "places",
          opacity: 1,
          duration: 200,
        },
      ],
      onChapterExit: [],
    },
    {
      id: "chapter-3",
      alignment: "left",
      hidden: false,
      description:
        "The <strong id='pink'>pink shapes</strong> are the areas of Charlotte that can be walked to in under 20 minutes from any of these libraries.",
      location: {
        center: [-80.84363, 35.20505],
        zoom: 9.81,
        pitch: 0,
        bearing: 0,
      },
      image: "imgs/legend1.png",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "walking-library",
          opacity: 1,
          duration: 200,
        },
      ],
      onChapterExit: [
        {
          layer: "walking-library",
          opacity: 0,
        },
        {
          layer: "library-points",
          opacity: 0,
        },
      ],
    },
    {
      id: "chapter-4",
      alignment: "left",
      hidden: false,
      description:
        "I did the same with <strong id='green'>coffee shops</strong> and their walkable areas.",
      location: {
        center: [-80.84363, 35.20505],
        zoom: 9.81,
        pitch: 0,
        bearing: 0,
      },
      rotateAnimation: false,
      image: "imgs/legend2.png",
      callback: "",
      onChapterEnter: [
        {
          layer: "walking-coffee",
          opacity: 1,
          duration: 200,
        },
        {
          layer: "coffee-points",
          opacity: 1,
          duration: 200,
        },
      ],
      onChapterExit: [
        {
          layer: "coffee-points",
          opacity: 0,
        },
      ],
    },
    {
      id: "chapter-5",
      alignment: "left",
      hidden: false,
      image: "imgs/legend2.png",
      description:
        "The areas where the <strong id='pink'>library</strong> and <strong id='green'>coffee</strong> shapes overlap are places I could live where I'd be able to walk to a library <strong>and</strong> and coffee shop within 20 minutes.",
      location: {
        center: [-80.84363, 35.20505],
        zoom: 9.81,
        pitch: 0,
        bearing: 0,
      },
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "walking-library",
          opacity: 1,
        },
        {
          layer: "walking-coffee",
          opacity: 1,
        },
      ],
      onChapterExit: [
        {
          layer: "walking-library",
          opacity: 0,
        },
        {
          layer: "walking-coffee",
          opacity: 0,
        },
      ],
    },
    {
      id: "chapter-6",
      alignment: "left",
      hidden: false,
      image: "imgs/legend3.png",
      description:
        "Focusing on just where those areas <strong id='intersection'>overlap</strong> reveals the “most walkable” areas in Charlotte by my (totally made up) criteria.",
      location: {
        center: [-80.84363, 35.20505],
        zoom: 9.81,
        pitch: 0,
        bearing: 0,
      },
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "intersection",
          opacity: 1,
        },
      ],
      onChapterExit: [
        {
          layer: "intersection",
          opacity: 0,
        },
      ],
    },
    {
      id: "chapter-7",
      alignment: "left",
      hidden: false,
      mapAnimation: "flyTo",
      image: "imgs/legend4.png",
      description:
        "It's clear that the largest “walkable” area of Charlotte is its center city and downtown area, called Uptown.",
      location: {
        center: [-80.84335, 35.22585],
        zoom: 11.17,
        pitch: 0,
        bearing: 0,
      },
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "intersection",
          opacity: 1,
        },
        {
          layer: "places",
          opacity: 1,
        },
      ],
    },
    {
      id: "chapter-8",
      alignment: "left",
      hidden: false,
      mapAnimation: "flyTo",
      image: "imgs/legend4.png",
      description:
        "University of North Carolina (UNC) Charlotte is also walkable which makes sense given that students need caffeine and books.",
      location: {
        center: [-80.7348, 35.30737],
        zoom: 11.17,
        pitch: 0,
        bearing: 0,
      },
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "intersection",
          opacity: 1,
        },
      ],
    },
    {
      id: "chapter-9",
      alignment: "left",
      hidden: false,
      mapAnimation: "flyTo",
      image: "imgs/legend4.png",
      description:
        "Besides those two, there are only a handful of neighborhoods that have easy walking access to these amenities.",
      location: {
        center: [-80.84363, 35.20505],
        zoom: 9.81,
        pitch: 0,
        bearing: 0,
      },
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "intersection",
          opacity: 1,
        },
      ],
    },
    {
      id: "chapter-10",
      alignment: "left",
      hidden: true,
      mapAnimation: "flyTo",
      image: "imgs/legend0.png",
      description:
        "Besides those two, there are only a handful of neighborhoods that have easy walking access to these amenities.",
      location: {
        center: [-80.84363, 35.20505],
        zoom: 9.81,
        pitch: 0,
        bearing: 0,
      },
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "places",
          opacity: 0,
        },
        {
          layer: "city-label",
          opacity: 1,
        },
      ],
    },
  ],
};
