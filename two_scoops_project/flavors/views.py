# -*- coding: utf-8 -*-
from __future__ import absolute_import, unicode_literals

from django.views.generic import ListView, DetailView

from braces.views import LoginRequiredMixin

from .models import Flavor

class FlavorListView(LoginRequiredMixin, ListView):
    model = Flavor

class FlavorDetailView(LoginRequiredMixin, DetailView):
    model = Flavor
