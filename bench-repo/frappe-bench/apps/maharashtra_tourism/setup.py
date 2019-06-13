# -*- coding: utf-8 -*-
from setuptools import setup, find_packages
import re, ast

with open('requirements.txt') as f:
	install_requires = f.read().strip().split('\n')

# get version from __version__ variable in maharashtra_tourism/__init__.py
_version_re = re.compile(r'__version__\s+=\s+(.*)')

with open('maharashtra_tourism/__init__.py', 'rb') as f:
	version = str(ast.literal_eval(_version_re.search(
		f.read().decode('utf-8')).group(1)))

setup(
	name='maharashtra_tourism',
	version=version,
	description='Tourist data',
	author='frappe',
	author_email='frappe@gmail.com',
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)
