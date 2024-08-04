from mehrzadco.model import BaseModel, models


class ContactUsMessages(BaseModel):
    sender_name = models.CharField(max_length=128, verbose_name='Sender Name')
    sender_email = models.EmailField(verbose_name='Sender Email')
    subject = models.CharField(max_length=256, blank=True, null=True)
    text = models.TextField()

    class Meta:
        verbose_name = 'Contact Us Message'
        verbose_name_plural = 'Contact Us Messages'

    @property
    def short_subject(self):
        return self.subject if len(self.subject) < 10 else f"{self.subject[:10]}..."

    def __str__(self):
        return f'{self.short_subject} By {self.sender_name}'