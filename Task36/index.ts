function city_country( city: string , country : string)
{
    return city + country;
}

let location1 = city_country ("rawalpindi" , "pakistan");

let location2 = city_country ("delhi" , "India");

let location3 = city_country ("tashkurgan" , "china");

console.log(location1);
console.log(location2);
console.log(location3);