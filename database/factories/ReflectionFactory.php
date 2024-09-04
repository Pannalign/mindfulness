<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Reflection;
use App\Models\User;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Reflection>
 */
class ReflectionFactory extends Factory
{
    /**
     * The name of the factory's
    corresponding model.
     *
     * @var string
     */
    protected $model = Reflection::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    // TODO: Add NodeFactory/integrate here.
    public function definition()
    {
        return
        [
            'owner_id' => User::factory(),
            'inquiry_id' => Inquiry::factory(),
            'title' => $this->faker->sentence(),
            'description' => $this->faker->paragraph(),
        ];
    }
}
