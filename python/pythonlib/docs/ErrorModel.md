# ErrorModel


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | [**ErrorModelError**](ErrorModelError.md) |  | [optional] 

## Example

```python
from formlabs.models.error_model import ErrorModel

# TODO update the JSON string below
json = "{}"
# create an instance of ErrorModel from a JSON string
error_model_instance = ErrorModel.from_json(json)
# print the JSON string representation of the object
print(ErrorModel.to_json())

# convert the object into a dict
error_model_dict = error_model_instance.to_dict()
# create an instance of ErrorModel from a dict
error_model_from_dict = ErrorModel.from_dict(error_model_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

