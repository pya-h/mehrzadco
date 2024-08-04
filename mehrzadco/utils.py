from .settings import MEDIA_URL, HOST_URL, SUBDOMAIN_PREFIX
from django.core.validators import validate_email, ValidationError


def get_host_root(https: bool = False):
    host = HOST_URL if not SUBDOMAIN_PREFIX else f"{SUBDOMAIN_PREFIX}.{HOST_URL}"
    return f"{'https' if https else 'http'}://{host}"


def get_media_root(https: bool = False):
    return f"{get_host_root(https)}{MEDIA_URL}"


def is_standard_email(email):
    try:
        validate_email(email)
        return True
    except ValidationError:
        pass
    return False
