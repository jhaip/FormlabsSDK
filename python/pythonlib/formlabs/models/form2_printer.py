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

from pydantic import BaseModel, ConfigDict, StrictBool, StrictInt, StrictStr, field_validator
from typing import Any, ClassVar, Dict, List
from formlabs.models.form4_printer_cartridge_data_value import Form4PrinterCartridgeDataValue
from typing import Optional, Set
from typing_extensions import Self

class Form2Printer(BaseModel):
    """
    Form2Printer
    """ # noqa: E501
    id: StrictStr
    product_name: StrictStr
    status: StrictStr
    is_connected: StrictBool
    connection_type: StrictStr
    ip_address: StrictStr
    firmware_version: StrictStr
    estimated_print_time_remaining_ms: StrictInt
    tank_id: StrictStr
    tank_material_code: StrictStr
    cartridge_data: Dict[str, Form4PrinterCartridgeDataValue]
    __properties: ClassVar[List[str]] = ["id", "product_name", "status", "is_connected", "connection_type", "ip_address", "firmware_version", "estimated_print_time_remaining_ms", "tank_id", "tank_material_code", "cartridge_data"]

    @field_validator('connection_type')
    def connection_type_validate_enum(cls, value):
        """Validates the enum"""
        if value not in set(['UNKNOWN', 'VIRTUAL', 'REMOTE', 'USB', 'WIFI', 'ETHERNET', '']):
            raise ValueError("must be one of enum values ('UNKNOWN', 'VIRTUAL', 'REMOTE', 'USB', 'WIFI', 'ETHERNET', '')")
        return value

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
        """Create an instance of Form2Printer from a JSON string"""
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
        # override the default output from pydantic by calling `to_dict()` of each value in cartridge_data (dict)
        _field_dict = {}
        if self.cartridge_data:
            for _key_cartridge_data in self.cartridge_data:
                if self.cartridge_data[_key_cartridge_data]:
                    _field_dict[_key_cartridge_data] = self.cartridge_data[_key_cartridge_data].to_dict()
            _dict['cartridge_data'] = _field_dict
        return _dict

    @classmethod
    def from_dict(cls, obj: Optional[Dict[str, Any]]) -> Optional[Self]:
        """Create an instance of Form2Printer from a dict"""
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return cls.model_validate(obj)

        _obj = cls.model_validate({
            "id": obj.get("id"),
            "product_name": obj.get("product_name"),
            "status": obj.get("status"),
            "is_connected": obj.get("is_connected"),
            "connection_type": obj.get("connection_type"),
            "ip_address": obj.get("ip_address"),
            "firmware_version": obj.get("firmware_version"),
            "estimated_print_time_remaining_ms": obj.get("estimated_print_time_remaining_ms"),
            "tank_id": obj.get("tank_id"),
            "tank_material_code": obj.get("tank_material_code"),
            "cartridge_data": dict(
                (_k, Form4PrinterCartridgeDataValue.from_dict(_v))
                for _k, _v in obj["cartridge_data"].items()
            )
            if obj.get("cartridge_data") is not None
            else None
        })
        return _obj


