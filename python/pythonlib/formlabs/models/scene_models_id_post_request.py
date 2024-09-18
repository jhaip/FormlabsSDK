# coding: utf-8

"""
    PreForm API

    No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

    The version of the OpenAPI document: 1.0
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


from __future__ import annotations
import pprint
import re  # noqa: F401
import json

from pydantic import BaseModel, ConfigDict, Field, StrictFloat, StrictInt, StrictStr
from typing import Any, ClassVar, Dict, List, Optional, Union
from formlabs.models.orientation_model import OrientationModel
from formlabs.models.scene_position_model import ScenePositionModel
from formlabs.models.units_model import UnitsModel
from typing import Optional, Set
from typing_extensions import Self

class SceneModelsIdPostRequest(BaseModel):
    """
    SceneModelsIdPostRequest
    """ # noqa: E501
    name: Optional[StrictStr] = Field(default=None, description="The name of the model used within job preparation.")
    position: Optional[ScenePositionModel] = None
    orientation: Optional[OrientationModel] = None
    scale: Optional[Union[StrictFloat, StrictInt]] = Field(default=None, description="The scale factor to apply to the model")
    units: Optional[UnitsModel] = None
    __properties: ClassVar[List[str]] = ["name", "position", "orientation", "scale", "units"]

    model_config = ConfigDict(
        populate_by_name=True,
        validate_assignment=True,
        protected_namespaces=(),
    )


    def to_str(self) -> str:
        """Returns the string representation of the model using alias"""
        return pprint.pformat(self.model_dump(by_alias=True))

    def to_json(self) -> str:
        """Returns the JSON representation of the model using alias"""
        # TODO: pydantic v2: use .model_dump_json(by_alias=True, exclude_unset=True) instead
        return json.dumps(self.to_dict())

    @classmethod
    def from_json(cls, json_str: str) -> Optional[Self]:
        """Create an instance of SceneModelsIdPostRequest from a JSON string"""
        return cls.from_dict(json.loads(json_str))

    def to_dict(self) -> Dict[str, Any]:
        """Return the dictionary representation of the model using alias.

        This has the following differences from calling pydantic's
        `self.model_dump(by_alias=True)`:

        * `None` is only added to the output dict for nullable fields that
          were set at model initialization. Other fields with value `None`
          are ignored.
        """
        excluded_fields: Set[str] = set([
        ])

        _dict = self.model_dump(
            by_alias=True,
            exclude=excluded_fields,
            exclude_none=True,
        )
        # override the default output from pydantic by calling `to_dict()` of position
        if self.position:
            _dict['position'] = self.position.to_dict()
        # override the default output from pydantic by calling `to_dict()` of orientation
        if self.orientation:
            _dict['orientation'] = self.orientation.to_dict()
        return _dict

    @classmethod
    def from_dict(cls, obj: Optional[Dict[str, Any]]) -> Optional[Self]:
        """Create an instance of SceneModelsIdPostRequest from a dict"""
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return cls.model_validate(obj)

        _obj = cls.model_validate({
            "name": obj.get("name"),
            "position": ScenePositionModel.from_dict(obj["position"]) if obj.get("position") is not None else None,
            "orientation": OrientationModel.from_dict(obj["orientation"]) if obj.get("orientation") is not None else None,
            "scale": obj.get("scale"),
            "units": obj.get("units")
        })
        return _obj


