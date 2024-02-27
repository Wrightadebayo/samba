import img from './assets/img_E3609.jpg'


const data = [
  {
    id: 1,
    name: 'Solomon Alawiye',
    age: 40,
    image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJUAngMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAAAQIDBAUHBv/EADcQAAEEAQMDAgQDBQkBAAAAAAEAAgMRBAUSITFBUQZhEyJxgSMykUJSobHBFBUzQ1NyktHwFv/EABgBAAMBAQAAAAAAAAAAAAAAAAABAgME/8QAHhEBAQEBAQEBAAMBAAAAAAAAAAECETEhEgNRgUH/2gAMAwEAAhEDEQA/APVBCVKpWKQhCVoKkQhMBFIQkAhKkT6BaRCEgQlNJQSmlHQCktBSJAtpE1CAeEtpiUICdKlSI6QSpEqYCRKhBwJEqpatqeNpOI7Jy3hrR+Ud3HwPdILjjtskigOTayM/1LpOA4tyMyPcOzTu/kud+oPV2fqjnRwOdBj9mjg/qvO/De42bJ82pt6bqf8A95ou7bum+vwytHT/AFJpWoO2Y+W3f2a7grjYiJ9kgjkb+XiulI/0cd4Lh9R7Jq5h6f8AV+bpzmxZodkY99Ty5v8A2ujYWZDnQNnxZGyRkWCD09iiUlhIhCYCEIQAlCRKEBZCEgKcmRUiEIAQhBKAq6lnQ6diPyck7WN7eT4XLddz8jVso5GU6mj5Y474aFqettXObqZxI3H4GJYr95y87I4uN39lFq8TqFsbR+Vv0UghP/gpIm9FcaGnssrp0zMZz4wOyYWrQdED3VeRhHZT2HcxWJBbRA+qv6TqmRo03xcR34d/iRnoR5VDak3cV2WkvWOsyOtaXqUGqYTMrG5a7hzb5aVbtc09E6kcLWRjPdUOV8tdg9dK+q0n9MTrRaahAPShMTgUHU6W0y0qaTwnKMJwQDlHkSCGCWU9GNLq+ikWfrziNGzS3qIXfyQbkb5XPmllJsyv3H6pu4N6kIhFwXfTooGxfFl+c0FHrXN5FyOaNvVwWhCY3s3A8LIkwgxgcHfZMhndE7ZdDwouIuard2RnrwquRJFHe5wCrvzH/D389PCzXvfkGj1KJmLu/ixLkw3Qd91C2VrjQKmGG1jPmLTfhVjG0G21weFXJGfqV5Mb2TMNFpsHwuwYcvx8PHm/1Iw5cfmN47q6DldV9NHfoGE4n/KHKqesb600JEJkUJwTU4ICROTQhMHhOCYEoQEip6swv0zMaK5gf/EK0vJeutVysF8GLiEsEjCXkdx0RTk659GS3Hb7qq+Z3xAwXyequyNpjfboEsUG8g7RXdR1rmXim+XIe5zX/IAOD1tNax56tO89FqiAgXtAUGwunAa2zam7zxcxepnR3i7e6ymhzQQ02+1u/wBmeYyQCbCzZoHxy3t+/hTjbXeOxTkMzQAw7r632UYc8OIr5fK1GwucASA4BNONQv8Agruow/F/tWAuJze+3hdN9IZML9HxYGStdKyMbmg8j7LmwbRJ70tL0i98HqPFdZDX2CL6ikSs7PrqdoSIVoKpGhRqVqAE5NS2mChPCiCeCgH2vH+vICZsXIN7S0xn2XrrWZ6ixDnaVNEyi8U9v1RfDl5XL5ACSR0vhWMYW4NHI7qpNcdg2OSKTYsn4Yu+nVY6y6MaaeTIGW2PqFnt1KLHcWGFzndy1MOS11uJ691HW5xdtBtOYnFftos1pjohtbRA6LOl1OVz3bY6HdxSnG7ltlRSxFh4pH54P3bFnCyNp/E4DuytZD2BnFLHbNs68IM7nik7hM/kWNwJpeg9FYYyNSE7rqBvHta8xC+3jwetro3o3CbjaWJWgh0vPKXPnGWtevSITLShaTxmentUacEwdaTcmWk3JhJacCoQbTrTkCW01xBFEcVSZuSWjhOe+sNGOA/40Vuimd/xXmWtsEFdY1zA/vLTJccVvq2X2K5U9roZHMe2nA0R4KixefEJ3NPAseFpaXhTZf5Xsj7/ADlVW0eoT8fJ+EfxACPKOtcx6Rnpud8YecuNt9r6KhqGhR4zCXZzS/x1SHVYNvEhHtaoZuoRy/kF/Uo6uyMySN9m6oFLtLRZ8JQbdudyQmFxIom0+sb6t6Tj/wBqzoYqNOfzQ7Lq+IwQwNjYKaB8oXh/Q+EJJX5NXt+Vo8Hyvdg8Uo/6ipQUoKiBTgVaUocngqEFPaUGYXJLtMLkC/b9USklaU+lG1SWqgIhIktMFvwKK8D69wG4+bHlRAATD5v9y96sH1tCJtFc/aC6N9/qlYcrnLJArUcbHgBwsFZshA6KSLIdH7jwouWk20X4ULjbVDNjxM/KonZtdBSrzZJd+1SPvFXU4HuCi3Wo3SX0QLVSMu/XpfTWt/3ZL8N8YfBJ1rqD5XQYJmTxtkiNtcLC5Ni7HPp7iCR1AXRvTYc3TY7PW6R+fnU2/eNcFOtMCVASBykaVACpGlI+vHRa9NG1zprq/l5U0XquK2h3CyvUIixpPhNY0kdQev6Lys8zt3JBop8PU46rj+ocCTbUoDiOl9FrY+RHks3QuDh9VxATOHR1e61tH1rIwpW7ZCWbuRaqRLrm5IsTS9YjzwyuoHIBWwHWl2FTli+rXvGjyBjS6+tLYMjQa6nwq+XAMuF8H7L28lOwRySSMHp3CruY8dloZELsbJmx5fzRO2m/5pjm2p615Ge4HwUxzCegWiYgm7QOgpHSuVRkNKTZSsBiKv6eUrTmfhuJiy5mVDjQgl8jwB+vK6kyOPHjgxoLuIAEf1Xm/Ruluxpm6jLFbthMYPa+AfuvURx/DjlD+ZXWd3klVxlT45nmtzd9+Apmjd0PPgoxmSMDnNAe0975HsiQR5B+Q7KHJHBT4CBOBpRTzPjaA5oeCeCPCZHYB2Sbiet8V+qVgeW1jGOr5Jyp5S1zTsY1oFNH9V5HLw2MyZI7unFtpUJ5d38sjNc0B1JWGqvkIQiOLXr0PpzNmgyWNYaB4+y6HBK6QgdPohCU9CaM3IBXFfdOdIQI3/v/AC0EIWhPFetMGODNfkRkguIseQRawWjc20IWemmEZSAWkQoaJaAV3Q8OPN1OKCThlhx9/ZCE56nXj30LgZS0MDWmQMAHahwpjcsxJP8AhEAe6ELoYJ4ZHid8djaIgRx3KbJtcANtXwCDyhCmEqMne2Q7vmPnunzASAOoAnk8IQim/9k=',
  },
  {
    id: 2,
    name: 'Hester Hogan',
    age: 32,
    image: 'https://www.course-api.com/images/people/person-2.jpeg',
  },
  {
    id: 3,
    name: 'Larry Little',
    age: 36,
    image: 'https://www.course-api.com/images/people/person-3.jpeg',
  },
  {
    id: 4,
    name: 'Sean Walsh',
    age: 34,
    image: 'https://www.course-api.com/images/people/person-4.jpeg',
  },
  {
    id: 5,
    name: 'Oluwadare Nike',
    age: 23,
    image: img, // Use the imported image variable
  },
];

export default data;
