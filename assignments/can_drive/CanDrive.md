# Can / Should You Drive

## Given set of three inputs, you should determine if you should be allowed to drive or not

Factors to check (inputs provided are in the same order)
* You have driving liscence
* You are tired
* You are sober

You should only be allowed to drive when you have diriving liscence, when you are not tired and when you are sober

If you don't have liscence - the result should be "You cannot drive"

Otherwise

If you are tired - "You shouldn't drive"

If you are not sober - "You shouldn't drive"

If you are not tired and you are sober - "You can drive"

```bash
Input - false, false, true
Output - "You cannot drive"

Input - true, false, true
Output - "You can drive"

Input - true, true, false
Output - "You shouldn't drive"
```

Run ```npm run test:file can_drive``` to check if your solution is correct