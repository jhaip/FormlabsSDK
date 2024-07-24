# Formlabs SDK Python Library

- [`pythonlib`](pythonlib) folder contains the autogenerated Python library code.
- [`examples`](examples) folder contains examples.

# Python library installation:

First, have at least Python 3.7 installed and available on your path.
We recommend installing the Python package in a [Python virtual environment](https://docs.python.org/3/library/venv.html) during testing.

```
# Create a virtual environment
python3 -m venv myenv

# Activate virtual environment
source myenv/bin/activate

# Ensure you have pip installed
python3 -m ensurepip --default-pip

# Install Formlabs SDK Python library
python3 -m pip install -e pythonlib
```

Now test the installation by running an example. The example expects that a PreFormServer executable has been downloaded, extracted, and placed in the folder where you are going to run the demo ([`/python`](/python)).

```
# Activate virtual environment, if you haven't already
source myenv/bin/activate

# Test installation by running a demo:
python3 examples/hello-server.py

# When you are done, deactivate the virtual environment
deactivate
```