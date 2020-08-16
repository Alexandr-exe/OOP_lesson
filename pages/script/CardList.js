class CardList {
  constructor(create, container, array) {
    this.create = create
    this.container = container;
    this.array = array;

    this.addCard = this.addCard.bind(this)
    this.render = this.render.bind(this)
  }

  addCard(name, link) {
    this.container.appendChild(this.create(name, link));
  }

  render() {
    this.array.forEach(item => {
      this.addCard(item.name, item.link)
    });
  }
}
