export interface Client {
  id: number;
  name: string;
  logo: string;
}

export interface Service {
  id: number;
  icon: string;
  name: string;
  desc: string;
}

export interface WhyUs {
  id: number;
  icon: string;
  name: string;
  desc: string;
}
export interface Testimonials {
  id: number;
  caption: string;
  text: string;
  author_avatar: string;
  author_name: string;
  author_position: string;
}

export interface FAQ {
  id: number;
  question: string;
  answer: string;
}

export interface Works {
  id: string;
  caption: string;
  image: string;
  name: string;
  link: string;
  desc: string;
}
