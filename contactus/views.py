from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_http_methods
import json
from .models import ContactUsMessages
from django.core.handlers.wsgi import WSGIRequest
from django.http import JsonResponse
from mehrzadco.utils import is_standard_email


@csrf_exempt
@require_http_methods(["POST"])
def send_contact_message(request: WSGIRequest):
    try:
        data = json.loads(request.body)
        sender_name = data.get('senderName')
        sender_email = data.get('senderEmail')
        subject = data.get('subject')
        text = data.get('text')
        empty_fields = []
        if not sender_name:
            empty_fields.append('Sender Name')
        if not sender_email:
            empty_fields.append('Sender Email')
        if not text:
            empty_fields.append('Message Text')

        if empty_fields:
            return JsonResponse({
                'status': 400,
                'error': 'Please provide these data to submit your message: ' + ', '.join(empty_fields)
            })

        if not is_standard_email(sender_email):
            return JsonResponse({'status': 400, 'error': 'Invalid Email. Please provide a valid email.'})
        message = ContactUsMessages(sender_name=sender_name, sender_email=sender_email, subject=subject, text=text)
        message.save()
    except:
        return JsonResponse({'status': 400, 'error': 'Can not send your message. Please check everything is correct and retry later.'})

    return JsonResponse({'status': 201, 'msg': 'Message sent successfully.'})
