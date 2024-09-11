# SceneTypeModel


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**machine_type** | **str** | The machine type of the scene | [optional] 
**material_code** | **str** | The material code of the scene | [optional] 
**print_setting** | **str** | The print setting of the scene | [optional] 
**layer_thickness** | [**SceneTypeModelLayerThickness**](SceneTypeModelLayerThickness.md) |  | [optional] 

## Example

```python
from formlabs.models.scene_type_model import SceneTypeModel

# TODO update the JSON string below
json = "{}"
# create an instance of SceneTypeModel from a JSON string
scene_type_model_instance = SceneTypeModel.from_json(json)
# print the JSON string representation of the object
print(SceneTypeModel.to_json())

# convert the object into a dict
scene_type_model_dict = scene_type_model_instance.to_dict()
# create an instance of SceneTypeModel from a dict
scene_type_model_from_dict = SceneTypeModel.from_dict(scene_type_model_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

