export interface Benefits {
  caption: string;
  desc: string;
}

export interface List {
  cat_id: string;
  cat_name: string;
  items: Item[];
}

interface Item {
  id: string;
  icon: string;
  name: string;
  desc: string;
}
