<?php

namespace App\Http\Controllers;

use App\Models\Inquiry;
use Illuminate\Http\Request;
use Inertia\Inertia;

class InquiryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        // FIXME: This likely isn't the correct way to do this.
        if ($request->route()->getPrefix() == "/dev-tools") {
            $inquiries = Inquiry::all();
            return Inertia::render('Inquiry/Index', compact('inquiries'));
        }

        abort(404, 'The page you are looking for could not be found.');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('inquiries.create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'owner_id' => 'required',
            'type' => 'required',
        ]);

        Inquiry::create($request->all());

        return redirect()->route('inquiries.index')->with('success', 'Inquiry created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(Request $request, Inquiry $inquiry)
    {
        // FIXME: This likely isn't the correct way to do this.
        if ($request->route()->getPrefix() == "/dev-tools") {
            return Inertia::render('Inquiry/Show', compact('inquiry'));
        }

        abort(404, 'The page you are looking for could not be found.');
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Inquiry $inquiry)
    {
        return view('inquiries.edit', compact('inquiry'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Inquiry $inquiry)
    {
        $request->validate([
            'owner_id' => 'required',
            'type' => 'required',
        ]);

        $inquiry->update($request->all());

        return redirect()->route('inquiries.index')->with('success', 'Inquiry updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Inquiry $inquiry)
    {
        $inquiry->delete();

        return redirect()->route('inquiries.index')->with('success', 'Inquiry deleted successfully.');
    }
}
