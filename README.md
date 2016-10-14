git update-index --assume-unchanged src/index.js

#Models
DeviceInfo
```
{
    deviceId: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    nickname: { type: String },
    url: { type: String },
    screen: { type: String, required: true },
    api: { type: Number, required: true },
    apiName: { type: String }
}
```

UserInfo
```
{
    email: { type: String, require: true, unique: true },
    url: { type: String },
    googleId: { type: String, require: true },
    name: { type: String, require: true }
}
```


Card
```
{
    <DeviceInfo/>
    <UserInfo/>
}
```
