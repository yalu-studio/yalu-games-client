export class Game {
  _id: String;
  name: String;
  name_en: String;
  release_date: Date;
  img_url: String;
  platforms: {
    ps4: Boolean;
    ps3: Boolean;
    psv: Boolean;
    steam: Boolean;
  };
  ps4: String;
  steam: String;
  completed: Boolean;
}
