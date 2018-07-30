import { Serializer, User } from 'src/common/models';

export class UserSerializer implements Serializer {
  fromJson(json: any): User {
    const address = json.address || {geo: {}};
    const company = json.company || {};
    const user: User = {
     id: json.id,
     name: json.name,
     username: json.username,
     email: json.email,
     address: {
      street: address.street,
      suite: address.suite,
      city: address.city,
      zipcode: address.zipcode,
      geo: {
        lat: address.geo.lat,
        lng: address.geo.lng,
      }
     },
     phone: json.phone,
     website: json.website,
     company: {
       name: company.name,
       catchPhrase: company.catchPhrase,
       bs: company.bs,
     }
    };
    return user;
  }
}
