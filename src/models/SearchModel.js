const data = [
  {
    id: 1,
    name: "[버거] 치즈버거처럼 생긴 새우버거",
    image:
      "https://images.unsplash.com/photo-1547584370-2cc98b8b8dc8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
  },
  {
    id: 2,
    name: "[피자] 썸네일 주소가 잘못된 상품",
    image: "http://foo.bar/image.jpg"
  }
];

export default {
  list() {
    return new Promise(res => {
      setTimeout(() => {
        res(data);
      }, 200);
    });
  }
};
