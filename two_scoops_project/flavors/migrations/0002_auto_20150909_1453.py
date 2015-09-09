# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('flavors', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='flavor',
            name='created_at',
            field=models.DateTimeField(auto_now_add=True, db_index=True),
        ),
        migrations.AlterField(
            model_name='flavor',
            name='flavor_description',
            field=models.CharField(max_length=250, db_index=True),
        ),
        migrations.AlterField(
            model_name='flavor',
            name='flavor_name',
            field=models.CharField(max_length=140, db_index=True),
        ),
        migrations.AlterField(
            model_name='flavor',
            name='modified_at',
            field=models.DateTimeField(auto_now=True, db_index=True),
        ),
    ]
