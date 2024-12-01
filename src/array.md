 > - if you want to access the arrays in typescript,it is as simple as adding a [] annonation to the type



## Example 1
#### given an arrray of poistive as input , return the maximum value in the array

```js
function maxValue(arr:number[])
{
    let maxValue =0;
    for(let i=0; i<arr.length; i++)
    {
        if(arr[i]>maxValue)
        max=arr[i];

    }
    return maxValue;
}
console.log(maxValue[1,2,3]);
```

## Example 2
- given a list og users,filter out the users that are legal(greater than  the 18 years of age)

```javascript
interface User{
    firstName:string;
    lastName:string;
    age:number;
}

```

### Solution
```javascript
interface User{
    firstName:string;
    lastName:string;
    age:number;
}
function filteredUsers(user:User[])
{
return user.filter(x=>x.age>=18);
}
console.log(filteredUsers([
    {
        firstName:"sumit",
        lastName:"chaubey",
        age:23
    },
    {
        firstName:"raman",
        lastName:"singh",
        age:17;
    }
]));
```
