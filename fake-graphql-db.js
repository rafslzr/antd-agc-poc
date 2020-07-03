module.exports = {
  posts: [
    { id: 1, title: "Lorem Ipsum", views: 254, user_id: 123 },
    { id: 2, title: "Sic Dolor amet", views: 65, user_id: 456 },
  ],
  users: [
    { id: 123, name: "John Doe" },
    { id: 456, name: "Jane Doe" },
  ],
  comments: [
    {
      id: 987,
      post_id: 1,
      body: "Consectetur adipiscing elit",
      date: new Date("2017-07-03"),
    },
    {
      id: 995,
      post_id: 1,
      body: "Nam molestie pellentesque dui",
      date: new Date("2017-08-17"),
    },
  ],
  notes: [
    {
      id: "111",
      title: "First Note",
      content: "Hello Note!",
      createdDate: new Date("2012-12-12"),
      modifiedDate: "12-12-2012",
      pinned: false,
    },
    {
      id: "112",
      title: "Second Note",
      content: "Hello Note!",
      createdDate: "12-12-2012",
      modifiedDate: "12-12-2012",
      pinned: false,
    },
    {
      id: "113",
      title: "Third Note",
      content: "Hello Note!",
      createdDate: "12-12-2012",
      modifiedDate: "12-12-2012",
      pinned: false,
    },
  ],
}
